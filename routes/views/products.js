var keystone = require('keystone');
var Products = keystone.list('products');
var ProductDetail = keystone.list('product_series');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'products';
	view.query('products', Products.model.find({}).sort({ sortOrder: 1 }));
	view.on('init', function (next) {
		ProductDetail.model.find({}).sort({ sortOrder: 1 }).exec(function (err, results) {
			locals.productSeries = results;
			next();
		});
	});
	view.render('products');
};
