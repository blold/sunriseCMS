var keystone = require('keystone');
var Antenae = keystone.list('antenae');
var AntenaeSeries = keystone.list('antenae_series');
var AntenaeOther = keystone.list('antenae_other');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'antenae';
	view.query('antenae', Antenae.model.findOne({}).sort({ createdAt: 'desc' }));
	view.on('init', function (next) {
		AntenaeSeries.model.find({}).sort({ createdAt: 'desc' }).exec(function (err, results) {
			// let data = { data: results[0] };
			// console.log(results);
			locals.antenaeSeries = results;
			next();
		});
	});
	view.on('init', function (next) {
		AntenaeOther.model.find({}).sort({ createdAt: 'desc' }).exec(function (err, results) {
			// let data = { data: results[0] };
			// console.log(results);
			locals.antenaeOthers = results;
			next();
		});
	});

	// Render the view
	view.render('antenae');
};
