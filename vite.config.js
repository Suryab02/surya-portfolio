import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm] }) },
    react(),
    tailwindcss(),
  ],
})
