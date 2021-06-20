
export class Reload { 
	ably 
	reloadCh 

	constructor (key) {
		this.ably = new Ably.Realtime(key)
		this.reloadCh = this.ably.channels.get('reload')

		this.reloadCh.subscribe('reload', (msg)=> {
			console.log(msg)
			location = location
		})
	}//()
}
/*
setTimeout(()=>{
	new Reload(key)
}, 100 )
*/
