/** @type {import("snowpack").SnowpackUserConfig } */
export default {

	buildOptions: {
		out: './www',
		watch: true
	},
	mount: {
		src: { url: '/' }
  	},

	plugins: [
		[
			"@marlonmarcello/snowpack-plugin-pug",
				{
					"data": {
						"title": "My website"
					}
				}
		]
	],

  optimize: {
    "bundle": true,
	"minify": true,
	"preload": true,
	"treeshake": true,
	"target": "es2017"
  }
};
