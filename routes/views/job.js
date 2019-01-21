var keystone = require('keystone');
var Job = keystone.list('job');
var JobPage = keystone.list('jobPage');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'job';
	view.on('init', function (next) {
		Job.model
			.find({})
			.sort({ sortOrder: 1 })
			.exec(function (err, results) {
				locals.jobs = results;
				next();
			});
	});
	view.on('init', function (next) {
		JobPage.model
			.findOne({})
			.sort({ sortOrder: 1 })
			.exec(function (err, results) {
				if (!err && results) locals.jobPage = results;
				else locals.jobPage = {};
				next();
			});
	});

	// Render the view
	view.render('job');
};
