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
 * SolutionIndex Model
 * ==========
 */

var SolutionIndex = new keystone.List('solutionIndex', { defaultColumns: 'topDesc, antenaeTitle, geoTitle, waterTitle, aiTitle, createdAt' });
SolutionIndex.add(
	'Top Section', {
		topDesc: { type: Types.Html, wysiwyg: true, label: '解决方案页面-总描述' },
		topRightImg: { type: Types.File, storage: storage('img/solutionIndex'), label: '上右图' },
	},
	'Antenae Section', {
		antenaeTitle: { type: Types.Text, initial: true, default: '通信', label: '板块1-名称', note: '不超过10字' },
		antenaeImg: { type: Types.File, storage: storage('img/solutionIndex'), label: '板块1-图片' },
		antenaeDesc: { type: Types.Textarea, label: '板块1-描述', note: '不超过100字' },
	},
	'Geo Section', {
		geoTitle: { type: Types.Text, default: '地质环境', label: '板块2-名称', note: '不超过10字' },
		geoImg: { type: Types.File, storage: storage('img/solutionIndex'), label: '板块2-图片' },
		geoDesc: { type: Types.Textarea, label: '板块2-描述', note: '不超过100字' },
	},
	'Water Section', {
		waterTitle: { type: Types.Text, default: '水利电力', label: '板块3-名称', note: '不超过10字' },
		waterImg: { type: Types.File, storage: storage('img/solutionIndex'), label: '板块3-图片' },
		waterDesc: { type: Types.Textarea, label: '板块3-描述', note: '不超过100字' },
	},
	'AI Section', {
		aiTitle: { type: Types.Text, default: '智能交通', label: '板块4-名称', note: '不超过10字' },
		aiImg: { type: Types.File, storage: storage('img/solutionIndex'), label: '板块4-图片' },
		aiDesc: { type: Types.Textarea, label: '板块4-描述', note: '不超过100字' },
	},
	'Chemi Section', {
		chemiTitle: { type: Types.Text, default: '石油化工', label: '板块5-名称', note: '不超过10字' },
		chemiImg: { type: Types.File, storage: storage('img/solutionIndex'), label: '板块5-图片' },
		chemiDesc: { type: Types.Textarea, label: '板块4-描述', note: '不超过100字' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);


SolutionIndex.register();
