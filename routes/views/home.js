var keystone = require('keystone');
var Home = keystone.list('home');
var Team = keystone.list('team');
var MainHeader = keystone.list('mainHeader');
var MainFooter = keystone.list('mainFooter');
var Enquiry = keystone.list('enquiry');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	view.query('home', Home.model.findOne({}).sort({ createdAt: 'desc' }));
	// view.query('mainHeader', MainHeader.model.findOne({}).sort({ createdAt: 'desc' }));
	view.on('init', function (next) {
		MainHeader.model.find({}).sort({ createdAt: 'desc' }).exec(function (err, results) {
			locals.header = results[0];
		});
		next();
	});
	view.on('init', function (next) {
		MainFooter.model.find({}).sort({ createdAt: 'desc' }).exec(function (err, results) {
			locals.footer = results[0];
		});
		next();
	});
	view.on('init', function (next) {
		Home.model.findOne({}).sort({ createdAt: 'desc' }).exec(function (err, result) {
			let teamArray = [result.team1, result.team2, result.team3, result.team4];
			Team.model.find({ _id: { $in: teamArray } }).exec(function (err, results) {
				// console.log(results);
				locals.teams = results;
				next();
			});
		});
	});
	// view.on('init', function (next) {
	// 	Home.model.findOne({}).sort({ createdAt: 'desc' }).exec(function (err, results) {
	// 		console.log(results);
	// 	});
	// 	next();
	// });

	// locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	// locals.formData = req.body || {};
	// locals.validationErrors = {};
	// locals.enquirySubmitted = false;
	// view.on('post', function (next) {
	// 	console.log(locals.formData);
		// var application = new Enquiry.model();
		// var updater = application.getUpdateHandler(req);
		// updater.process(req.body, {
		// 	flashErrors: true,
		// }, function (err) {
		// 	if (err) {
		// 		locals.validationErrors = err.errors;
		// 	} else {
		// 		locals.enquirySubmitted = true;
		// 	}
		// 	next();
		// });
	// 	next();
	// });

	view.render('home');
};
