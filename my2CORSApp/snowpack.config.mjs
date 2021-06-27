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
		['@epandco/snowpack-riot-plugin',{}],
		["@marlonmarcello/snowpack-plugin-pug", {
				"pretty": true,
				"base": "./www",
			}]
	],

  oXptimize: {
    "bundle": true,
	"minify": true,
	"treeshake": true,
	"target": "es2017"
  }

};
