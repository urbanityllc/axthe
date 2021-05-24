
const fetch = require('make-fetch-happen')

// //////////////////
module.exports =  class BasicEmailer  {// EmailJS.com service and template

	static postUrl = 'https://api.emailjs.com/api/v1.0/email/send'

	/**
	 *  Create a service (eg. your gmail) and a template on EmailJS.com
	 *  and in settings check 'Allow EmailJS API' and turn off 'Use Access token'
	 * 
	 * Template fields:
  	 * subject, from_email, from_name, 
	 * to_email, to_name, message
	 * @param {*} service_id
	 * @param {*} user_id  // from integraion page
	 * @param {*} template_id

	 * @param {*} subject
  	 * @param {*} from_email
	 * @param {*} from_name

 	 * @param {*} to_email
	 * @param {*} to_name
	 * @param {*} message
	 */
	send(service_id, user_id, template_id, subject, from_email, from_name, to_email, to_name, message) {
		var dat = {
			service_id: service_id,
			template_id: template_id,
			user_id: user_id,
			template_params: {
				 subject: subject
				, from_email: from_email
				, from_name: from_name
				, to_email: to_email
				, to_name:  to_name
				, message:  message
			}
		}// dat

		// post the message to email js dot com
		fetch(BasicEmailer.postUrl, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dat),
			})
			.then(res => {
				console.log(this.constructor.name, 'emailing ' + to_email, res.statusText)
			})

	}// sent

}
