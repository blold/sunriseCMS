var keystone = require('keystone');
var Home = keystone.list('home');
var Team = keystone.list('team');
var MainHeader = keystone.list('mainHeader');
var MainFooter = keystone.list('mainFooter');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	view.query(
		'home',
		Home.model.findOne({}).sort({ createdAt: 'desc' })
	);
	// view.query('mainHeader', MainHeader.model.findOne({}).sort({ createdAt: 'desc' }));
	view.on('init', function (next) {
		MainHeader.model
			.find({})
			.sort({ createdAt: 'desc' })
			.exec(function (err, results) {
				if (!err && results.length > 0) locals.header = results[0];
				else locals.header = {};
				next();
			});
	});
	view.on('init', function (next) {
		MainFooter.model
			.find({})
			.sort({ createdAt: 'desc' })
			.exec(function (err, results) {
				if (!err && results.length > 0) locals.footer = results[0];
				else locals.footer = {};
				next();
			});
	});
	view.on('init', function (next) {
		Home.model
			.findOne({})
			.sort({ createdAt: 'desc' })
			.exec(function (err, result) {
				if (!err && result) {
					let teamArray = [
						result.team1,
						result.team2,
						result.team3,
						result.team4,
					];
					Team.model
						.find({ _id: { $in: teamArray } })
						.exec(function (err, results) {
							locals.teams = results;
						});
				} else {
					locals.teams = null;
				}
				next();
			});
	});

	view.render('home');
};
