var keystone = require('keystone');
var moment = require('moment');
var Types = keystone.Field.Types;

function storage (path) {
	return new keystone.Storage({
		adapter: keystone.Storage.Adapters.FS,
		fs: {
			path: keystone.expandPath(`./public/uploads/${path}`), // required; path where the files should be stored
			publicPath: `/public/uploads/${path}`, // path where files will be served
			generateFilename: function (file, attemptNumber) {
				var originalname = file.originalname;
				// var filenameWithoutExtension = originalname.substring(0, originalname.lastIndexOf('.'));
				var timestamp = new Date().getTime();
				return `${timestamp}-${originalname}`;
			},
		},
		schema: {
			originalname: true,
			url: true,
		},
	});
}

/**
 * News Model
 * ==========
 */

var News = new keystone.List('news');
News.add(
	'News Display Section', {
		newsTime: { type: Types.Date, initial: true, required: true, default: moment('1995-12-25').locale('en'), index: true, label: '新闻时间' },
		shortTitle: { type: Types.Text, initial: true, required: true, default: '不超过20字', label: '新闻标题' },
		displayImg: { type: Types.File, storage: storage('img/news'), label: '新闻展示图片' },
	},
	'News Content', {
		newsOrigin: { type: Types.Text, default: '不超过20字', label: '新闻来源' },
		content1: { type: Types.Textarea, label: '新闻详细内容-第一段' },
		content2: { type: Types.Textarea, label: '新闻详细内容-第二段' },
		url: { type: Types.Url, label: '新闻原链接' },
		contentImg: { type: Types.File, storage: storage('img/news'), label: '新闻内容图片' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);


News.register();
