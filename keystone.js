// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var engine = require('ejs-locals');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

// console.log(process.env.NODE_ENV);
// console.log(process.env.FOO);

keystone.init({
	'name': 'sunrise',
	'brand': 'sunrise',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'custom engine': engine,
	'view engine': 'ejs',

	'port': process.env.APP_ENV_PORT,
	'env': process.env.NODE_ENV,

	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	moment: require('moment'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	users: 'users',
	HomePage: [{
		label: 'HomePage',
		key: 'home',
		path: '/keystone/homes',
	}],
	Antenae: [
		{
			label: 'Anteanse',
			key: 'antenae',
			path: '/keystone/antenaes',
		},
		{
			label: 'AntenaeSeries',
			key: 'antenae_series',
			path: '/keystone/antenae_series',
		},
		{
			label: 'AntenaeOther',
			key: 'antenae_other',
			path: '/keystone/antenae_others',
		},
	],
	Geologic: [
		{
			label: 'Geologic',
			key: 'geologic',
			path: '/keystone/geologics',
		},
		{
			label: 'GeologicSeries',
			key: 'geologic_series',
			path: '/keystone/geologic_series',
		},
		{
			label: 'GeologicOther',
			key: 'geologic_other',
			path: '/keystone/geologic_others',
		},
	],
	Cases: [
		{
			label: 'Cases',
			key: 'cases',
			path: '/keystone/cases',
		},
		{
			label: 'CasesSeries',
			key: 'cases_series',
			path: '/keystone/cases_series',
		},
	],
});

// Start Keystone to connect to your database and initialise the web server
if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
	+ '\n----------------------------------------'
	+ '\nYou have opted into email sending but have not provided'
	+ '\nmailgun credentials. Attempts to send will fail.'
	+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
	+ '\nset up your mailgun integration');
}


keystone.start();
