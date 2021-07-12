/** @type {import("snowpack").SnowpackUserConfig } */
export default {

	buildOptions: {
		out: './www'
	},
	mount: {
		src: { url: '/' }
	},
	
	devOptions: {
		port:9090
	},

	plugins: [
		["snowpack-plugin-pug", {
				"pretty": false,
				"base": "./www",
			}]
	],

}
