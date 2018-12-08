var keystone = require('keystone');
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
 * MainFooter Model
 * ==========
 */

var MainFooter = new keystone.List('mainFooter');
MainFooter.add(
	'Solutions Section', {
		solutionsMainTitle: { type: Types.Text, initial: true, required: true, default: '解决方案', label: '第一列总标题' },
		solutions1: { type: Types.Text, default: '通信' },
		solutions2: { type: Types.Text, default: '地质环境' },
		solutions3: { type: Types.Text, default: '水利电力' },
		solutions4: { type: Types.Text, default: '智能交通' },
		solutions5: { type: Types.Text, default: '石油化工' },
	},
	'About Section', {
		aboutMainTitle: { type: Types.Text, initial: true, required: true, default: '关于桑瑞', label: '第二列总标题' },
		about1: { type: Types.Text, default: '公司简介' },
		news: { type: Types.Text, default: '新闻资讯' },
	},
	'Related Section', {
		relatedMainTitle: { type: Types.Text, initial: true, required: true, default: '相关链接', label: '第三列总标题' },
		contactUs: { type: Types.Text, default: '联系我们' },
		overseeBusiness: { type: Types.Text, default: '海外业务' },
	},
	'Wechat Section', {
		wechatTitle: { type: Types.Text, default: '微信公众号' },
		wechatImg: { type: Types.File, storage: storage('img/normal'), label: '微信公众号 图片' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}

);


MainFooter.register();
