import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readPosts } from './scripts/read-posts.mjs'

// `virtual:post-index` exports the published posts' frontmatter, read straight
// from the .mdx files. Listings import that instead of the MDX modules, so the
// article bodies stay in their own lazily loaded chunks.
function postIndex() {
  const id = 'virtual:post-index'
  const resolved = '\0' + id
  return {
    name: 'post-index',
    resolveId: (source) => (source === id ? resolved : null),
    load(source) {
      if (source !== resolved) return null
      const posts = readPosts().map(({ slug, title, date, tag, excerpt, minutes }) => ({
        slug,
        title: title || slug,
        date: date || '',
        tag: tag || 'Notes',
        excerpt: excerpt || '',
        minutes: Number(minutes) || 1,
      }))
      return `export default ${JSON.stringify(posts)}`
    },
    configureServer(server) {
      // a frontmatter edit in dev should refresh the listings
      server.watcher.on('all', (_event, file) => {
        if (!/[\\/]src[\\/]posts[\\/].+\.mdx$/.test(file)) return
        const mod = server.moduleGraph.getModuleById(resolved)
        if (mod) server.reloadModule(mod)
      })
    },
  }
}

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm] }) },
    react(),
    tailwindcss(),
    postIndex(),
  ],
})
