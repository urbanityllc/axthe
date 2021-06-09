
const DBl = require('./DBl')
const { v4: uuidv4 } = require('uuid')

/*
Like localStorage but on express server instance, great for caching.
Can be used to store cookies from browsers's localStorage: by passing encrypted json of email | phone, etc. in header or cookie
At start of session on browser: read from browser's localStorage.
For passwordless send number to phone for user to 'guess' in browser.

Optional hashing for storage and encrypting for transport is a separate util
*/
export class ServerStore {

	_dbl
	
	//  connect and create table if: not exists
	firstPrep() {
		// pass in amount of RAM to use for the store, default is 256 meg, else it goes to file
		this._db = new DBl()
		this._db.firstPrep('serverStore.db')
		if(this._dbl.tableExists('server_store'))
		return

		this._db.write(`
			CREATE TABLE server_store (
					key VARCHAR(256),
					val TEXT
				);
			`)
		this._db.write(`CREATE UNIQUE INDEX ON server_store ( key, val); `)// yes, I know answer is in index
	}//()

	/**
	 * 
	 * @param {*} key Should be uniqe, could even be a GUID
	 * @param {*} val Sometimes a JSON string
	 */
	setItem(key, val){
		return this._db.write(`
			INSERT INTO server_store(key, value) VALUES(${key}, ${value});
		`)
	}//()

	getItem(key){
		return this._db.readOne(`
			SELECT value FROM server_store where key=${key};
		`)
	}//()

	removeItem(){
		return this._db.write(`
			DELETE  FROM server_store where key=${key};
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
					key VARCHAR(256),
					val TEXT
				);
			`)
		this._db.write(`CREATE UNIQUE INDEX ON server_store ( key, val);`)// yes, I know answer is in index
	}//()

	createNewGUID() {

	}

	/**
	 before transport, maybe just the key to keep the 'cookie' small
	 */
	enc(){}

	/**
	 after transport
	 */
	dec(){}

}