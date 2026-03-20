import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const kbDirectory = path.join(process.cwd(), 'src/content/kb')

export type KbDocument = {
  slug: string
  title: string
  date: string
  description: string
  content: string
}

export function getAllKbSlugs() {
  if (!fs.existsSync(kbDirectory)) return []
  return fs.readdirSync(kbDirectory).filter(file => file.endsWith('.md')).map(file => file.replace(/\.md$/, ''))
}

export function getKbBySlug(slug: string): KbDocument | null {
  try {
    const fullPath = path.join(kbDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || 'Untitled Document',
      date: data.date || '',
      description: data.description || '',
      content,
    }
  } catch (e) {
    return null
  }
}

export function getAllKbDocs(): Omit<KbDocument, 'content'>[] {
  const slugs = getAllKbSlugs()
  const docs = slugs.map(slug => getKbBySlug(slug)).filter(Boolean) as KbDocument[]
  
  // Sort by date descending
  docs.sort((a, b) => (a.date < b.date ? 1 : -1))
  
  return docs.map(({ slug, title, date, description }) => ({ slug, title, date, description }))
}
