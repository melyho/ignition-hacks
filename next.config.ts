import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
     {
        source: '/schedule',
        destination: 'https://docs.google.com/spreadsheets/d/1Rfwuv77u6AXpzAlL0U4pgK-d0Jkx63zf2MfhcPHrAJA/edit?usp=sharing',
        permanent: true, // true = 301 redirect, false = 302
  },
   ];
  },
};

export default nextConfig;
