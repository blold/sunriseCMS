var keystone = require('keystone');
// var ProductDetail = keystone.list('product_series');
var ProductDetailRadar = keystone.list('products_radar');
var ProductDetailAntenae = keystone.list('products_antenae');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	console.log(req.query.id);
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'productDetail';
	// view.query('productDetail', ProductDetail.model.findById(req.query.id).sort({ sortOrder: 1 }));

	view.on('init', function (next) {
		ProductDetailRadar.model.findById(req.query.id).exec(function (err, results) {
			// console.log(locals)
			if (results) {
				locals.productDetail = results;
			}
			next();
		});
	});
	view.on('init', function (next) {
		ProductDetailAntenae.model.findById(req.query.id).exec(function (err, results) {
			// console.log(results)
			if (results) {
				locals.productDetail = results;
			}
			next();
		});
	});
	// console.log(locals);
	view.render('productDetail');
};
