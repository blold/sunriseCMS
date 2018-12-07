var keystone = require('keystone');
var Home = keystone.list('home');
var Team = keystone.list('team');
var MainHeader = keystone.list('mainHeader');

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
			// let data = { data: results[0] };
			locals.header = results[0];
			// console.log(locals.header);
		});
		next();
	});
	view.on('init', function (next) {
		Home.model.findOne({}).sort({ createdAt: 'desc' }).exec(function (err, result) {
			let teamArray = [result.team1, result.team2, result.team3, result.team4];
			Team.model.find({ _id: { $in: teamArray } }).exec(function (err, results) {
				console.log(results);
				locals.teams = results;
				next();
			});
			// console.log(teamArray);
			// next();
		});
	});
	view.on('init', function (next) {
		Home.model.findOne({}).sort({ createdAt: 'desc' }).exec(function (err, results) {
			console.log(results);
		});
		next();
	});

	view.render('home');
};
