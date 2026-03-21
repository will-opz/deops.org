import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const targetIp = searchParams.get('q')

  // 1. Feature: Support querying a specified IP
  if (targetIp) {
    try {
      const res = await fetch(`https://ipapi.co/${targetIp}/json/`)
      const data = await res.json()
      if (data.error) return NextResponse.json({ ip: targetIp, error: true }, { status: 400 })
      return NextResponse.json({ 
        ...data, 
        ip: targetIp, 
        network_type: data.org?.toLowerCase().includes('cloud') ? 'Data Center' : 'Residential',
        _source: 'external-lookup'
      })
    } catch {
      return NextResponse.json({ ip: targetIp, error: 'External API failure' }, { status: 500 })
    }
  }

  // 2. Feature: Current User Info using Cloudflare Edge (request.cf)
  const cfip = request.headers.get('cf-connecting-ip');
  const xff = request.headers.get('x-forwarded-for')?.split(',')[0];
  const rip = request.headers.get('x-real-ip');
  const nextIp = (request as any).ip;
  const ip = cfip || xff || rip || nextIp || '127.0.0.1';

  // Cloudflare injects the CF object in edge runtime
  const cf = (request as any).cf;

  if (cf && Object.keys(cf).length > 0) {
    return NextResponse.json({
      ip,
      country_name: cf.country || 'N/A', // CF returns ISO 3166-1 Alpha 2 code
      country_code: cf.country || '',
      region: cf.region || cf.regionCode || 'N/A',
      city: cf.city || 'N/A',
      latitude: cf.latitude || '',
      longitude: cf.longitude || '',
      org: cf.asOrganization || 'N/A',
      asn: cf.asn ? `AS${cf.asn}` : '',
      timezone: cf.timezone || 'UTC',
      network_type: (cf.asOrganization || '').toLowerCase().includes('cloud') ? 'Data Center' : 'Residential',
      proxy: false, 
      _source: 'cloudflare-edge'
    })
  }

  // Fallback for Local Development (where CF object is mostly absent)
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`, { signal: AbortSignal.timeout(3000) })
    const data = await res.json()
    return NextResponse.json({ 
      ...data, 
      ip, 
      network_type: data.org?.toLowerCase().includes('cloud') ? 'Data Center' : 'Residential',
      _source: 'local-fallback' 
    })
  } catch {
    return NextResponse.json({ ip, _source: 'unknown-fallback' })
  }
}
