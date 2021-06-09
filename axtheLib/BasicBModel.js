const pug = require('pug');
const cheerio = require('cheerio');
const NodeCache = require( "node-cache" );
const fs = require('fs-extra')
const { v4: uuidv4 } = require('uuid')

const ServerCacheStore = require('./dat/ServerCacheStore')

// //////////////////////////////////////////////
const IMG = 'iio'
const TXT = 'ttt'
const $HTM = 'htm'
const FOLD = 'getFolders'

/**
 * This is the testable business layer
 */
module.exports =  class BasicBModel{  // media files based DB

	_sb // supabase instance

	_pOptions = {// pug options
	}

	_mc  // memory cache

	// like local storage
	_scs = new ServerCacheStore()

	constructor(cacheTime=2){

		this._scs.firstPrep()
		this._scs.setItem('a','b')
		console.log(this._scs.getItem('a'))
		this._scs.removeItem('a')
		console.log(this._scs.getItem('a'))

		console.log('part 2')
		this._scs.setItem('a','b')
		this._scs.clear()
		console.log(this._scs.getItem('a'))

		this._mc = new NodeCache({
			stdTTL:cacheTime,
			useClones: false,
			maxKeys: cacheTime * 300,
			checkperiod: cacheTime*4 // to remove old from RAM
		})
		console.log(this.constructor.name,'ready')
	}//()

	cloneFolder(source, target) {
		return new Promise((res,reject) => {
		fs.copy('./public/'+source, './public/'+target, function (err) {
			if (err) { 
				console.error(err)
				reject(err)
				} else res()
			} ) 
		})
	}//()

	/** list all pages in the sub-folder: it will give you a list of page */
	getFolders(rfolder) {
		let ans = this._mc.get(rfolder+FOLD)
		if(ans != undefined) return ans

		const source = './public/'+rfolder
		ans = fw.readdirSync(source, { withFileTypes: true })
			.filter(dirent => dirent.isDirectory())
			.map(dirent => dirent.name)
		this._mc.set(rfolder+FOLD, ans)
		return ans
	}

	// get text
	getTxt(folder, selector) {
		let ans = this._mc.get(folder+TXT+selector)
		if(ans != undefined) return ans

		let $ = this._mc.get(folder+$HTM)
		if($ == undefined) {
			const file = './public/'+folder+'/index.pug'
			const html = pug.renderFile(file, this._pOptions)
			$ = cheerio.load(html);
			this._mc.set(folder+$HTM, $)
		}

		ans = $(selector).text()
		this._mc.set(folder+TXT+selector, ans)
		return ans
	}

	// get image src
	getImg(folder, selector) {
		let ans = this._mc.get(folder+IMG+selector)
		if(ans != undefined) return ans

		let $ = this._mc.get(folder+$HTM)
		if($ == undefined) {
			const file = './public/'+folder+'/index.pug'
			const html = pug.renderFile(file, this._pOptions)
			$ = cheerio.load(html);
			this._mc.set(folder+$HTM, $)
		}

		ans = $(selector).attr('src')
		this._mc.set(folder+IMG+selector, ans)
		return ans
	}

	// get a list, good for API
	getFolderData(rfolder, imgSelector,  ...selectors) {

	}

	// sort array on prop, else in order of folder name
	sort(arr, prop) {

	}

}
