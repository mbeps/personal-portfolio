/** @type {import('next').NextConfig} */
const nextConfig = {
	reactCompiler: true,
	images: {
		qualities: [15, 20, 25, 30, 50, 60, 75, 90],
	},
}

module.exports = nextConfig
