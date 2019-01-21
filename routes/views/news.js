var keystone = require('keystone');
var News = keystone.list('news');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'news';
	view.query('news', News.model.find({}).sort({ sortOrder: 1 }));
	// view.query('mainHeader', MainHeader.model.findOne({}).sort({ sortOrder: 1 }));
	// view.on('init', function (next) {
	// 	News.model.find({}).sort({ sortOrder: 1 }).exec(function (err, results) {
	// 		// console.log(results);
	// 	});
	// 	next();
	// });
	// Render the view
	// view.render('index');
	// view.render('mainHeader');
	view.render('news');
};
