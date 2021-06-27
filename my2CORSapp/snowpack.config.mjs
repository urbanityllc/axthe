/** @type {import("snowpack").SnowpackUserConfig } */
export default {

	buildOptions: {
		baseUrl: "./",
		out: './www'
	},
	mount: {
		src: { url: '/' }
	},
	devOptions: {
		port:9090
	},

	plugins: [
		['@epandco/snowpack-riot-plugin',{
			pretty: true
		}],

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

};
