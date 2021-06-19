
const BasicBModel     = require('axthe/BasicBModel.js')

// /////////////////////////////////////////////////////////////
// use for pgSQL
const {createClient} = require('@supabase/supabase-js')

// validation
const validate = require("validate.js")

/**
 * base class has sb property for supabase, used for full stack programming
 */
module.exports =  class MyBModel extends BasicBModel {

	constructor() {
		super()
		console.log(process.cwd(), this._config)
	}


}