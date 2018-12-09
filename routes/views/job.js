var keystone = require('keystone');
var Job = keystone.list('job');
var JobPage = keystone.list('job_page');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'job';
	view.on('init', function (next) {
		Job.model
			.find({})
			.sort({ createdAt: 'desc' })
			.exec(function (err, results) {
				locals.jobs = results;
				// console.log(locals.header);
				next();
			});
	});
	view.on('init', function (next) {
		JobPage.model
			.findOne({})
			.sort({ createdAt: 'desc' })
			.exec(function (err, results) {
				locals.jobPage = results;
				// console.log(locals.header);
				next();
			});
	});

	// Render the view
	view.render('job');
};
