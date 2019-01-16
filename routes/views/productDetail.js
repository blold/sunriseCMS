var keystone = require('keystone');
var ProductDetail = keystone.list('product_series');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'productDetail';
	view.query('productDetail', ProductDetail.model.findById(req.query.id).sort({ createdAt: 'desc' }));
	console.log(req.query.id);
	// view.query('mainHeader', MainHeader.model.findOne({}).sort({ createdAt: 'desc' }));
	// Render the view
	// view.render('index');
	// view.render('mainHeader');
	view.render('productDetail');
};
