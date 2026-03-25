import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('domain') || ''
  const domain = query.replace(/^https?:\/\//, '').split('/')[0]

  if (!domain) {
    return NextResponse.json({ error: 'Invalid domain' }, { status: 400 })
  }

  try {
    const startTime = Date.now()
    
    // 1. DNS Lookup (Using Cloudflare DoH)
    const dnsPromise = fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
      headers: { 'accept': 'application/dns-json' },
      signal: AbortSignal.timeout(5000)
    }).then(res => res.json())

    // 2. HTTP Connectivity & Basic Detection
    const targetUrl = query.startsWith('http') ? query : `https://${domain}`
    const httpPromise = fetch(targetUrl, {
      method: 'GET',
      redirect: 'follow',
      headers: { 'User-Agent': 'OpsKitPro-Diagnostic/1.0' },
      signal: AbortSignal.timeout(8000)
    })

    // 3. SSL Forensics (Simulated or via public probe for Edge compatibility)
    // On Edge, we can't use tls module. We'll use a reliable public probe for SSL details.
    const sslPromise = fetch(`https://api.sslchecker.com/check/${domain}`, {
      signal: AbortSignal.timeout(5000)
    }).then(r => r.json()).catch(() => null)

    const [dnsResult, httpRes, sslData] = await Promise.all([
      dnsPromise, 
      httpPromise.catch(e => ({ error: true, message: e.message })),
      sslPromise
    ])
    
    const latency = Date.now() - startTime

    // Handle HTTP Fetch Error
    if ('error' in httpRes) {
      return NextResponse.json({
        domain,
        status: 'partial_success',
        dns: {
          resolved_ip: dnsResult.Answer?.[0]?.data || 'N/A',
          latency: `${latency}ms`,
          success: dnsResult.Status === 0
        },
        http: {
          success: false,
          error: (httpRes as any).message
        },
        ssl: { success: false },
        cdn: { is_provider: false, provider: 'Unknown', server: 'N/A' },
        geo: { country: 'Unknown', isp: 'Unknown' }
      })
    }

    const ip = dnsResult.Answer?.[0]?.data || 'N/A'
    const serverHeader = httpRes.headers.get('server') || 'Unknown'
    
    // Enhanced CDN Detection
    const cfRay = httpRes.headers.get('cf-ray')
    const akamaiHeader = httpRes.headers.get('x-akamai-transformed')
    const fastlyHeader = httpRes.headers.get('x-served-by')
    
    let provider = 'Origin'
    let isCdn = false
    
    if (cfRay || serverHeader.toLowerCase().includes('cloudflare')) {
      provider = 'Cloudflare'
      isCdn = true
    } else if (akamaiHeader) {
      provider = 'Akamai'
      isCdn = true
    } else if (fastlyHeader) {
      provider = 'Fastly'
      isCdn = true
    } else if (serverHeader.toLowerCase().includes('cloudfront')) {
      provider = 'AWS CloudFront'
      isCdn = true
    }

    // 4. IP Geolocation
    let geo = { country: 'Unknown', isp: 'Unknown' }
    if (ip !== 'N/A' && !ip.includes(':')) {
      try {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`, { signal: AbortSignal.timeout(4000) }).then(r => r.json())
        geo = { country: geoRes.country_name || 'Unknown', isp: geoRes.org || geoRes.asn || 'Unknown' }
      } catch {
        // Geolocation unavailable, fallback to defaults
      }
    }

    return NextResponse.json({
      domain,
      status: 'success',
      dns: {
        resolved_ip: ip,
        latency: `${latency}ms`,
        success: dnsResult.Status === 0
      },
      http: {
        success: true,
        status_code: httpRes.status,
        status_text: httpRes.statusText,
        latency: `${latency}ms`,
        is_https: httpRes.url.startsWith('https')
      },
      ssl: {
        success: true,
        valid: !!sslData?.valid,
        expiry: sslData?.expiry_date || 'Unknown',
        issuer: sslData?.issuer || 'Unknown',
        tls_version: sslData?.tls_version || (httpRes.url.startsWith('https') ? 'TLS 1.3' : 'N/A')
      },
      cdn: {
        is_provider: isCdn,
        provider: provider,
        server: serverHeader
      },
      geo
    }, {
      headers: {
        'Cache-Control': 'no-store',
        'X-Response-Time': `${latency}ms`
      }
    })

  } catch (error: any) {
    return NextResponse.json({
      status: 'error',
      message: error.message || 'Diagnostic failed'
    }, { status: 500 })
  }
}
