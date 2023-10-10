/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		/**
		 * ? SVGR SETUP
		 */
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		})
		/**
		 * ?  REACT PDF SETUP
		 */
		config.resolve.alias.canvas = false

		return config
	},
}

module.exports = nextConfig
