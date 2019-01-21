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
 * CasesSeries Model
 * ==========
 */

var CasesSeries = new keystone.List('cases_series', { defaultColumns: 'casesTitle, casesSubTitle, createdAt', sortable: true });
CasesSeries.add(
	'Cases Series Section', {
		casesTitle: { type: Types.Text, default: '示例：通信', initial: true, label: '该案例-名称', note: '不超过15字' },
		casesSubTitle: { type: Types.Text, default: '示例：丽水篮球馆—大型场馆覆盖解决方案', label: '该案例-描述' },
		casesBref: { type: Types.Textarea, default: '示例：超高密度，覆盖难控制, 超大容量，干扰无可避免, 常规天线不满足覆盖要求', label: '该案例-短描述', note: '不超过100字' },
		casesMoreContent: { type: Types.Textarea, default: '示例：根据不同的看台结构和天线安装角度，使用两款矩形赋形天线覆盖相应的看台区域。。。', label: '该案例-更多描述' },
		casesImg: { type: Types.File, storage: storage('img/cases/series'), label: '该案例图片' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);

CasesSeries.register();
