
// http://snipcart.com/blog/11ty-tutorial
// http://www.sitepoint.com/getting-started-with-eleventy
// http://github.com/vktrwlt/pugsum

// 11ty configuration:

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const pluginSass = require("eleventy-plugin-sass")
const pug = require("pug")

module.exports = eleventyConfig => {
	
	eleventyConfig.setLibrary("pug", pug)
	eleventyConfig.setPugOptions({  })

	eleventyConfig.addPlugin(eleventyNavigationPlugin)
	eleventyConfig.addPlugin(pluginSass, {})

	eleventyConfig.htmlTemplateEngine= "pug"
	eleventyConfig.setTemplateFormats(['pug'])
	eleventyConfig.dataTemplateEngine= "pug"

	eleventyConfig.dir= {
		input: 'src',
		output: 'static'
	}

	eleventyConfig.addPassthroughCopy("css")
	eleventyConfig.addPassthroughCopy("js")
	eleventyConfig.addPassthroughCopy("images")
	eleventyConfig.addPassthroughCopy("fonts")
	eleventyConfig.addPassthroughCopy("./favicon.ico")
	eleventyConfig.addPassthroughCopy("./robots.txt")
	eleventyConfig.addPassthroughCopy("./ads.txt")
	eleventyConfig.addPassthroughCopy("./_redirects")
	eleventyConfig.addPassthroughCopy("./*.png")

	return eleventyConfig
};