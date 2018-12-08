var keystone = require('keystone');
var Geologic = keystone.list('geologic');
var GeologicSeries = keystone.list('geologic_series');
var GeologicOther = keystone.list('geologic_other');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'geologic';
	view.query('geologic', Geologic.model.findOne({}).sort({ createdAt: 'desc' }));
	view.on('init', function (next) {
		GeologicSeries.model.find({}).sort({ createdAt: 'desc' }).exec(function (err, results) {
			// let data = { data: results[0] };
			// console.log(results);
			locals.geologicSeries = results;
			next();
		});
	});
	view.on('init', function (next) {
		GeologicOther.model.find({}).sort({ createdAt: 'desc' }).exec(function (err, results) {
			// let data = { data: results[0] };
			// console.log(results);
			locals.geologicOthers = results;
			next();
		});
	});

	// Render the view
	view.render('geologic');
};
