import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Completely disable ESLint during builds
  },
  // OR for specific rules:
  eslint: {
    dirs: ['app'], // Only check app directory
    ignorePatterns: ['components/RecentProjectSection.tsx'], // Ignore specific files
  },
};

module.exports = nextConfig;

