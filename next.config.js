/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		qualities: [15, 20, 25, 30, 50, 60, 75, 90],
	},
	reactCompiler: true
}

module.exports = nextConfig
