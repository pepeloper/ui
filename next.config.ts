import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/r/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, HEAD, OPTIONS",
          },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Cache-Control",
            value:
              "public, max-age=60, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ]
  },
}

export default nextConfig
