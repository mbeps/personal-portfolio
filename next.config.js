// @ts-check
import withSerwistInit from "@serwist/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		qualities: [15, 20, 25, 30, 50, 60, 75, 90],
	},
}

const withSerwist = withSerwistInit({
	// Service worker source file
	swSrc: "app/sw.ts",
	// Service worker destination in public folder
	swDest: "public/sw.js",
	// Disable during development AND when using Turbopack
	disable: process.env.NODE_ENV !== "production",
	// Don't reload page when going from offline to online
	reloadOnOnline: false,
});

export default withSerwist(nextConfig);