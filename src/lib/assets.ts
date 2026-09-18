// Asset URL helper for GitHub Pages subpath deployment.
// Vite injects the configured `base` at build/runtime as
//   import.meta.env.BASE_URL   (e.g. "/YAI/")
// Public assets referenced with absolute paths like "/images/x.png" are NOT
// prefixed by Vite, so they 404 when served from a subpath. We resolve them
// with the runtime base here.
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '') || ''

export function asset(path: string): string {
  if (!path) return path
  // Already absolute http(s) or protocol-relative.
  if (/^(https?:)?\/\//.test(path)) return path
  // Root-relative -> prefix with base.
  if (path.startsWith('/')) return BASE + path
  return path
}
