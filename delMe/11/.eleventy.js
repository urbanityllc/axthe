// 11ty configuration
// http://snipcart.com/blog/11ty-tutorial

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const pluginSass = require("eleventy-plugin-sass")
const pug = require("pug")

module.exports = eleventyConfig => {
	
	eleventyConfig.setLibrary("pug", pug)
	eleventyConfig.setPugOptions({  })

	eleventyConfig.addPlugin(eleventyNavigationPlugin)
	eleventyConfig.addPlugin(pluginSass, {})


	eleventyConfig.addPassthroughCopy("css")
	eleventyConfig.addPassthroughCopy("js")
	eleventyConfig.addPassthroughCopy("images")
	eleventyConfig.addPassthroughCopy("fonts")
	eleventyConfig.addPassthroughCopy("./favicon.ico")
	eleventyConfig.addPassthroughCopy("./robots.txt")
	eleventyConfig.addPassthroughCopy("./ads.txt")
	eleventyConfig.addPassthroughCopy("./_redirects")
	eleventyConfig.addPassthroughCopy("./*.png")

	return {
		"dataTemplateEngine": "pug",
		markdownTemplateEngine: "pug",
		htmlTemplateEngine: "pug",
		templateFormats: ["pug"],

		pathPrefix: '/site2',

		dir: {
		input: 'src',
		output: 'static'
		}
	}
};