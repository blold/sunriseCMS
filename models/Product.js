var keystone = require('keystone');
// var moment = require('moment');
var Types = keystone.Field.Types;

// function storage (path) {
// 	return new keystone.Storage({
// 		adapter: keystone.Storage.Adapters.FS,
// 		fs: {
// 			path: keystone.expandPath(`./public/uploads/${path}`), // required; path where the files should be stored
// 			publicPath: `/public/uploads/${path}`, // path where files will be served
// 			generateFilename: function (file, attemptNumber) {
// 				var originalname = file.originalname;
// 				// var filenameWithoutExtension = originalname.substring(0, originalname.lastIndexOf('.'));
// 				var timestamp = new Date().getTime();
// 				return `${timestamp}-${originalname}`;
// 			},
// 		},
// 		schema: {
// 			originalname: true,
// 			url: true,
// 		},
// 	});
// }

/**
 * Produts Model
 * ==========
 */
var Products = new keystone.List('products', { defaultColumns: 'Title, createdAt' });
Products.add(
	'Products Section', {
		// newsTime: { type: Types.Date, initial: true, required: true, default: moment('1995-12-25').locale('en'), index: true, label: '新闻时间' },
		Title: { type: Types.Text, initial: true, required: true, default: '不超过20字', label: '产品信息页面' },
		// displayImg: { type: Types.File, storage: storage('img/news'), label: '新闻展示图片' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);


Products.register();
