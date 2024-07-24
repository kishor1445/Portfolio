/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "api.microlink.io",
            pathname: "**"
          }
        ]
    },
    headers: [
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload"
      },
    ],
};

export default nextConfig;
