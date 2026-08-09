import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin Turbopack root to this app (parent D:\Repositories has another lockfile).
  turbopack: {
    root: __dirname,
  },
  // Static HTML/CSS/JS export -> generates the `out/` folder on `next build`.
  output: "export",
  // Emit each route as a folder with index.html so it works on plain FTP hosts.
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
