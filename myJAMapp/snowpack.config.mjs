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
		"bundle": true,
		"minify": true,
		"treeshake": true,
		"target": "es2017"
	  }
	
}
