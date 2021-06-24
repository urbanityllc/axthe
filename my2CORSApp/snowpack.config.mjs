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
	"treeshake": true,
	"target": "es2017"
  }
};
