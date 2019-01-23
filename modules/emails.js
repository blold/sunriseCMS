/**
 * This file defines the email tests for your project.
 *
 * Each email test should provide the locals used to render the
 * email template for preview.
 *
 * Values can either be an object (for simple tests), or a
 * function that calls a callback(err, locals).
 *
 * Sample generated emails, based on the keys and methods below,
 * can be previewed at /keystone/test-email/{key}
 */

// var keystone = require('keystone');
const KeystoneEmail = require('keystone-email');
const Logger = require('./logger');

// new KeystoneEmail('../templates/emails/activeEmail.ejs', {
// 	transport: 'mailgun',
// }).send({
// 	info: '12345678',
// }, {
// 	apiKey: 'fa11e8b592cee969994d8448c5c339c9-2d27312c-1d50b6c5',
// 	domain: 'sandbox729a6d5b05f3430387eca96f55042602.mailgun.org',
// 	to: 'blold344@gmail.com',
// 	from: {
// 		name: 'Your Site',
// 		email: 'test@sunrise.com',
// 	},
// 	subject: 'Your first KeystoneJS email',
// }, function (err, result) {
// 	if (err) {
// 		console.error('🤕 Mailgun test failed with error:\n', err);
// 	} else {
// 		console.log('📬 Successfully sent Mailgun test with result:\n', result);
// 	}
// });

class Email {
	constructor (emailTemplate, transport = 'mailgun') {
		this.keyStoneEmail = new KeystoneEmail(`${emailTemplate}`, { transport: transport });
		this.apiKey = 'fa11e8b592cee969994d8448c5c339c9-2d27312c-1d50b6c5';
		this.domain = 'sandbox729a6d5b05f3430387eca96f55042602.mailgun.org';
	}

	async sendEmail (toEmail, fromEmail, fromName, subject, info) {
		try {
			if (typeof info !== 'object') return new Error('ActiveInfo is not object');
			let options = { apiKey: this.apiKey, domain: this.domain, to: toEmail, from: { name: fromName, email: fromEmail }, subject: subject };
			let result = await this.keyStoneEmail.send(info, options);
			if (result === undefined) {
				console.log('ActiveEmail sended successfully');
				Logger.info('ActiveEmail sended successfully');
				return { result: 'success' };
			}
		} catch (error) {
			console.log(error);
			Logger.error(error);
			return new Error(error);
		}
	}

}

// let email = new Email('../templates/emails/activeEmail.ejs');
// email.sendEmail('blold344@gmail.com', 'blold@sunrise.com', 'SunriseBlold', 'Test', { info: 321 });

module.exports = Email;
