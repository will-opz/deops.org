import { cookies } from 'next/headers'
import { getDictionary } from '@/dictionaries'

export const runtime = 'edge'
import QRClient from './qr-client'

export default async function QRPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "zh") as "zh" | "en";
  const dict = await getDictionary(lang)
  
  return <QRClient lang={lang} dict={dict} />
}
