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
		["@marlonmarcello/snowpack-plugin-pug", {
				"pretty": false,
				"base": "./www",
			}]
	],

	optimize: {
		"bundle": false,
		"minify": false,
		"treeshake": false,
		"target": "es2017"
	}
}
