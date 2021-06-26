/** @type {import("snowpack").SnowpackUserConfig } */
export default {

	buildOptions: {
		out: './www'
	},
	mount: {
		src: { url: '/' }
  	},

	plugins: [
		[
			"@marlonmarcello/snowpack-plugin-pug",{
				"pretty": false,
				"base": "./www",
				},
			"@epandco/snowpack-riot-plugin",{
				template: 'pug'
			}
		]
	],

  optimize: {
    "bundle": true,
	"minify": true,
	"treeshake": true,
	"target": "es2017"
  }
};
