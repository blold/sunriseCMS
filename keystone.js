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
	'name': 'SUNRISE',
	'brand': 'SUNRISE',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'custom engine': engine,
	'view engine': 'ejs',
	'signin logo': ['/images/logo/logo.png', 200, 200],
	'wysiwyg skin': 'lightgray',

	'port': (process.env.NODE_ENV === 'development') ? 4000 : 8080,
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
	'管理员': 'users',
	'主页': [{
		label: '主页',
		key: 'home',
		path: '/keystone/homes',
	}],
	'关于': [
		{
			label: '关于',
			key: 'about',
			path: '/keystone/abouts',
		},
	],
	'解决方案—主页': [
		{
			label: '解决方案-主页',
			key: 'solutionIndex',
			path: '/keystone/solution-indices',
		},
	],
	'产品信息-主页面': [
		{
			label: '产品信息-主页面',
			key: 'products',
			path: '/keystone/products',
		},
		{
			label: '产品信息-综合产品系列',
			key: 'product_series',
			path: '/keystone/product_series',
		},
		{
			label: '产品信息-雷达类',
			key: 'products_radar',
			path: '/keystone/products_radars',
		},
		{
			label: '产品信息-通讯类',
			key: 'products_antenae',
			path: '/keystone/products_antenaes',
		},
	],
	'解决方案—通信页面': [
		{
			label: '解决方案-通信页面',
			key: 'antenae',
			path: '/keystone/antenaes',
		},
		{
			label: '解决方案-通信产品系列',
			key: 'antenae_series',
			path: '/keystone/antenae_series',
		},
		{
			label: '解决方案-通信其他产品',
			key: 'antenae_other',
			path: '/keystone/antenae_others',
		},
	],
	'解决方案—地质环境': [
		{
			label: '解决方案-地质环境页面',
			key: 'geologic',
			path: '/keystone/geologics',
		},
		{
			label: '解决方案-地质环境系列',
			key: 'geologic_series',
			path: '/keystone/geologic_series',
		},
		{
			label: '解决方案-地质环境其他产品',
			key: 'geologic_other',
			path: '/keystone/geologic_others',
		},
	],
	'新闻': [
		{
			label: '新闻',
			key: 'news',
			path: '/keystone/news',
		},
	],
	'案例主页': [
		{
			label: '案例主页',
			key: 'cases',
			path: '/keystone/cases',
		},
		{
			label: '案例系列',
			key: 'cases_series',
			path: '/keystone/cases_series',
		},
	],
	'团队': [
		{
			label: '团队',
			key: 'team',
			path: '/keystone/teams',
		},
	],
	'招聘主页': [
		{
			label: '招聘主页',
			key: 'jobPage',
			path: '/keystone/job-pages',
		},
		{
			label: '招聘岗位',
			key: 'job',
			path: '/keystone/jobs',
		},
	],
	'咨询投诉': [
		{
			label: '咨询投诉',
			key: 'enquiry',
			path: '/keystone/enquiries',
		},
	],
	// Header: [
	// 	{
	// 		label: 'MainHeader',
	// 		key: 'mainHeader',
	// 		path: '/keystone/main-headers',
	// 	},
	// ],
	// Footer: [
	// 	{
	// 		label: 'MainFooter',
	// 		key: 'mainFoooter',
	// 		path: '/keystone/main-footers',
	// 	},
	// ],
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
