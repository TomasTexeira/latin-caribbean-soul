import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All imagery is served locally from /public/images.
  // Next 16 defaults allowed qualities to [75]; allow 90 for crisp photos.
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
