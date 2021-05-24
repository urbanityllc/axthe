const {createClient} = require('@supabase/supabase-js')

/*
How to:
const SB = require('./SB.js') // this is what gets edite

const sb = new SB()
sb.addUser()
*/


module.exports =  class SB  {//
 
    sb = createClient('https://irsbqgsezzvyimjyernq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTgxMjAxMSwiZXhwIjoxOTM3Mzg4MDExfQ.jdXRbl04EWzvRDBU0fYSWFzuJ8nzVnS0_fFZb944QSg')

    async addUser() {
        const { error, data } = await this.sb.auth.signUp({
            email: 'example@email.com',
            password: 'example-password'
          })
        console.log(error,data)
    }

}

