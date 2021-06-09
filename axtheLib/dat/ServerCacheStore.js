
const DBl = require('./DBl')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcryptjs')

/*
Like localStorage but on express server instance, great for caching; like REDIS or MemCache.
*/
module.exports = class ServerCacheStore {

	_db
	
	//  connect and create table if: not exists
	firstPrep() {
		// pass in amount of RAM to use for the store, default is 256 meg, else it goes to file
		this._db = new DBl()
		this._db.firstPrep('serverStore.litedb')
		if(this._db.tableExists('server_store'))
		return

		this._db.write(`
			CREATE TABLE server_store (
					key VARCHAR(256) PRIMARY KEY,
					val TEXT
				);
			`)
		this._db.write(`CREATE UNIQUE INDEX kv ON server_store( key, val); `)// yes, I know answer is in index
		}//()

	/**
	 * 
	 * @param {*} key Should be uniqe, could even be a GUID
	 * @param {*} val Sometimes a JSON string
	 */
	setItem(key, val){
		return this._db.write(`
			INSERT INTO server_store(key, val) VALUES('${key}', '${val}')
				ON CONFLICT(key) DO 
					UPDATE SET val = '${val}'
						WHERE key = '${key}'
			;
		`)
	}//()

	getItem(key){
		const ret= this._db.readOne(`
			SELECT val FROM server_store where key='${key}';
		`)
		if(ret) return ret['val']
		return null
	}//()

	removeItem(key){
		return this._db.write(`
			DELETE  FROM server_store where key='${key}';
		`)
	}//()


	//drops and recreate table
	clear() {
		this._db.write(`
			DROP TABLE server_store;
		`)

		// new
		this._db.write(`
			CREATE TABLE server_store (
					key VARCHAR(256) PRIMARY KEY,
					val TEXT
				);
			`)
		this._db.write(`CREATE UNIQUE INDEX kv ON server_store( key, val); `)// yes, I know answer is in index
	}//()


}