/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// var fs = require('fs');

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	// layouts: importRoutes('./layouts'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	app.get('/', routes.views.home);
	app.get('/solutions', routes.views.solutionIndex);
	app.get('/team', routes.views.team);
	app.get('/about', routes.views.about);
	app.get('/news', routes.views.news);
	app.get('/cases', routes.views.cases);
	app.get('/job', routes.views.job);
	app.get('/products', routes.views.products);
	app.get('/productDetail', routes.views.productDetail);
	app.post('/enquiry', routes.views.enquiry);
	// app.post('/enquiry', function(req, res){
	// 	console.log(req.body)
	// 	res.send(200)
	// });
	app.get('/solutions/antenae', routes.views.antenae);
	app.get('/solutions/geologic', routes.views.geologic);

	// Antenae Download
	app.get('/public/uploads/files/antenae/series/:id', function (req, res, next) {
		res.download(`public/uploads/files/antenae/series/${req.params.id}`);
	});
	app.get('/public/uploads/files/antenae/other/:id', function (req, res, next) {
		res.download(`public/uploads/files/antenae/other/${req.params.id}`);
	});

	// Geologic Download
	app.get('/public/uploads/files/geologic/series/:id', function (
		req,
		res,
		next
	) {
		res.download(`public/uploads/files/geologic/series/${req.params.id}`);
	});
	app.get('/public/uploads/files/geologic/other/:id', function (req, res, next) {
		res.download(`public/uploads/files/geologic/other/${req.params.id}`);
	});

	// Products Download
	app.get('/public/uploads/files/products/series/:id', function (
		req,
		res,
		next
	) {
		res.download(`public/uploads/files/products/series/${req.params.id}`);
	});

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
};
