
const BasicBModel     = require('axthe/BasicBModel.js')
const yaml = require('js-yaml')
const fs   = require('fs')
const path = require('path')

// /////////////////////////////////////////////////////////////
// use for pgSQL
const {createClient} = require('@supabase/supabase-js')

// validation
const validate = require("validate.js")

/**
 * base class has sb property for supabase, used for full stack programming
 */
module.exports =  class AnBModel extends BasicBModel {

	_config = yaml.load(fs.readFileSync(path.join(__dirname,'../config.yaml')))

	constructor() {
		super()
		console.log(__dirname, this._config)
	}


}