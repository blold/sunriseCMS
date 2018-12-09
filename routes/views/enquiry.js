var keystone = require('keystone');
var Enquiry = keystone.list('enquiry');

exports = module.exports = function (req, res) {
	// var view = new keystone.View(req, res);
	var locals = req.body;
	// locals.createdAt = Date.now();
	// locals.createdAt = moment().locale('zh-cn');
	console.log(locals);
	var newPost = new Enquiry.model(locals);
	newPost.save(function (err) {
		if (!err) res.sendStatus(200);
		else res.sendStatus(400);
	});
};
