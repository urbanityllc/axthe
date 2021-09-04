'use strict';
const sb = require('@supabase/supabase-js')
const { v4: uuidv4 } = require('uuid')

module.exports =  class Model1 {
	_supabase

	constructor() {
		const supabaseUrl = 'https://kkcvzobqeuydfegzfngd.supabase.co'
		const supabaseKey = process.env.SUPABASE_KEY
		console.log(supabaseKey)
		this._supabase = sb.createClient(supabaseUrl, supabaseKey)
	}

	async ins() {
		let id = uuidv4()

		const { data, error } = await this._supabase
		.from('one')
		.insert([
			{ name: 'The Shire', id: id }
		])

		console.log(data, error)
	}//()

}