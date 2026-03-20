import { NextRequest } from 'next/server'

// Required for Next.js App Router to deploy efficiently on Cloudflare Pages Edge network
export const runtime = 'edge'

export async function POST(req: NextRequest) {
  try {
    const { query, conversation_id } = await req.json()

    // Environment variables managed safely server-side (in Cloudflare Pages settings)
    const DIFY_API_URL = process.env.DIFY_API_URL || "https://your-dify-tunnel.cloudflareaccess.com/v1"
    const DIFY_API_KEY = process.env.DIFY_API_KEY

    if (!DIFY_API_KEY) {
      return new Response(JSON.stringify({ error: "ERR_MISSING_DIFY_KEY: Next.js server cannot find DIFY_API_KEY in environment variables." }), { status: 500 })
    }

    const payload = {
      inputs: {},
      query: query || "",
      response_mode: "streaming",
      user: "deops-kb-client", // generic identifier for logs
      ...(conversation_id ? { conversation_id } : {})
    }

    const headers: Record<string, string> = {
      "Authorization": `Bearer ${DIFY_API_KEY}`,
      "Content-Type": "application/json",
    }

    if (process.env.CF_ACCESS_CLIENT_ID && process.env.CF_ACCESS_CLIENT_SECRET) {
      headers["CF-Access-Client-Id"] = process.env.CF_ACCESS_CLIENT_ID
      headers["CF-Access-Client-Secret"] = process.env.CF_ACCESS_CLIENT_SECRET
    }

    const response = await fetch(`${DIFY_API_URL}/chat-messages`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const text = await response.text()
      return new Response(JSON.stringify({ error: `Dify API Failed [${response.status}]: ${text}` }), { status: 500 })
    }

    // Direct stream proxying (Zero middleware buffering, ultra raw speed)
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive",
      },
    })
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `Edge Function Failed: ${error.message}` }), { status: 500 })
  }
}
