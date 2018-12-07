var keystone = require('keystone');
var SolutionIndex = keystone.list('solutionIndex');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'solutionIndex';
	view.query('solutionIndex', SolutionIndex.model.findOne({}).sort({ createdAt: 'desc' }));
	// view.query('mainHeader', MainHeader.model.findOne({}).sort({ createdAt: 'desc' }));
	// view.on('init', function (next) {
	// 	SolutionIndex.model.find({}).sort({ createdAt: 'desc' }).exec(function (err, results) {
	// 		// let data = { data: results[0] };
	// 		locals.header = results[0];
	// 		console.log(locals.header);
	// 	});
	// 	next();
	// });
	// Render the view
	// view.render('index');
	// view.render('mainHeader');
	view.render('solutionIndex');
};
