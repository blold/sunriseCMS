var keystone = require('keystone');
var Products = keystone.list('products');
// var ProductDetail = keystone.list('product_series');
var ProductDetailRadar = keystone.list('products_radar');
var ProductDetailAntenae = keystone.list('products_antenae');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'products';
	view.query('products', Products.model.find({}).sort({ sortOrder: 1 }));
	view.on('init', function (next) {
		ProductDetailRadar.model.find({}).sort({ sortOrder: 1 }).exec(function (err, results) {
			locals.productDetailRadar = results;
			next();
		});
	});

	view.on('init', function (next) {
		ProductDetailAntenae.model.find({}).sort({ sortOrder: 1 }).exec(function (err, results) {
			// let data = { data: results[0] };
			// console.log(results);
			locals.productDetailAntenae = results;
			next();
		});
	});
	view.render('products');
};
