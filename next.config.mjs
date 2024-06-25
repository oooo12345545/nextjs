/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "www.yuntech.edu.tw",
          port: "",
          pathname: "/images/**",
        },
        {
            protocol: "https",
            hostname: "tour.yunlin.gov.tw",
            port: "",
            pathname: "/public/upload/**",
          },
          {
            protocol: "https",
            hostname: "www.swcoast-nsa.gov.tw",
            port: "",
            pathname: "/image/**",
          },
      ],
    },
  };

export default nextConfig;
