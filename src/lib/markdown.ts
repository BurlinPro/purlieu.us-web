/**
 * Lightweight markdown-to-HTML converter for admin post content.
 *
 * Supported syntax:
 *   ## Heading or ### Heading  →  <h3>
 *   **bold text**              →  <strong>
 *   Blank line between blocks  →  new <p>
 */
export function markdownToHtml(raw: string): string {
  return raw
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (/^#{2,3}\s/.test(block)) {
        const text = block.replace(/^#{2,3}\s+/, '').trim()
        return `<h3>${escapeHtml(text)}</h3>`
      }
      const withBold = block
        .replace(/\*\*(.*?)\*\*/g, (_, t) => `<strong>${escapeHtml(t)}</strong>`)
        .replace(/\n/g, '<br/>')
      return `<p>${withBold}</p>`
    })
    .join('\n')
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Auto-generate a URL slug from a title string.
 */
export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}
