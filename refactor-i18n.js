const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p, callback);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      callback(p);
    }
  });
}

walk(appDir, (filepath) => {
  let content = fs.readFileSync(filepath, 'utf8');
  let original = content;

  // Replace params from signatures
  content = content.replace(/export default async function (\w+)\(\{\s*params[^)]+\)\s*\{/g, 'export default async function $1() {');
  
  // Replace internal param extraction
  content = content.replace(/const\s+\{\s*lang\s*\}\s*=\s*(?:await\s+)?params;?/g, 'const cookieStore = await cookies();\n  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "zh") as "zh" | "en";');
  
  // If we injected cookies logic but missing import
  if (content.includes('cookieStore.get') && !content.includes('import { cookies }')) {
    content = `import { cookies } from 'next/headers'\n` + content;
  }

  // Rewrite standard Links
  content = content.replace(/`\/\$\{lang\}\/([^`]+)`/g, '`/$1`');
  content = content.replace(/`\/\$\{lang\}(#[^`]+)?`/g, '`/$1`');
  
  // Literal `<Link href={\`/\${lang}\`} ` -> `<Link href={"/"} `
  content = content.replace(/href=\{\`\/\$\{lang\}\`\}/g, 'href="/"');

  if (content !== original) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated ${filepath}`);
  }
});

// Write Middleware
const mwPath = path.join(__dirname, 'src', 'middleware.ts');
let mwContent = `
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['zh', 'en']
const defaultLocale = 'zh'

function getLocale(request: NextRequest): string {
  if (request.cookies.has('NEXT_LOCALE')) {
    const cookieLang = request.cookies.get('NEXT_LOCALE')?.value;
    if (cookieLang && locales.includes(cookieLang)) return cookieLang;
  }
  
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  try {
    return matchLocale(languages, locales, defaultLocale)
  } catch (e) {
    return defaultLocale
  }
}

export const runtime = 'experimental-edge'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (
    pathname.includes('.') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next')
  ) {
    return
  }

  const locale = getLocale(request)
  const response = NextResponse.next()

  if (!request.cookies.has('NEXT_LOCALE') || request.cookies.get('NEXT_LOCALE')?.value !== locale) {
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 31536000,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    })
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
`;
fs.writeFileSync(mwPath, mwContent.trim(), 'utf8');
console.log('Updated middleware.ts');
