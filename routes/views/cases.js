var keystone = require('keystone');
var Cases = keystone.list('cases');
var CasesSeries = keystone.list('cases_series');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'cases';
	view.query('cases', Cases.model.findOne({}).sort({ sortOrder: 1 }));
	view.on('init', function (next) {
		CasesSeries.model.find({}).sort({ sortOrder: 1 }).exec(function (err, results) {
			if (!err && results.length) locals.casesSeries = results;
			else locals.casesSeries = {};
			next();
		});
	});

	// Render the view
	view.render('cases');
};
