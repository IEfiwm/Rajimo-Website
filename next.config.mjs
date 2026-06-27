/** @type {import('next').NextConfig} */
const nextConfig = {
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
