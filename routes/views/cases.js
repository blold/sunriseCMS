var keystone = require('keystone');
var Cases = keystone.list('cases');
var CasesSeries = keystone.list('cases_series');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'cases';
	view.query('cases', Cases.model.findOne({}).sort({ createdAt: 'desc' }));
	view.on('init', function (next) {
		CasesSeries.model.find({}).sort({ createdAt: 'desc' }).exec(function (err, results) {
			// let data = { data: results[0] };
			// console.log(results);
			locals.casesSeries = results;
			next();
		});
	});
	// view.query('mainHeader', MainHeader.model.findOne({}).sort({ createdAt: 'desc' }));
	// locals.cases = {};

	// Render the view
	// view.render('index');
	// view.render('mainHeader');
	view.render('cases');
};
