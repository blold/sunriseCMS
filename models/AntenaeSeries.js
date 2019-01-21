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
 * AntenaeSeries Model
 * ==========
 */

var AntenaeSeries = new keystone.List('antenae_series', { defaultColumns: 'solutionTitle, solutionType, solutionImg, solutionFile, createdAt', sortable: true });
AntenaeSeries.add(
	'Main Section', {
		solutionTitle: { type: Types.Text, default: '该系列名称', initial: true, label: '通信系列-名称', note: '不超过10字' },
		solutionType: { type: Types.Select, initial: true, emptyOption: false, options: '通信天线, NBIOT' },
		solutionDesc: { type: Types.Textarea, default: '该系列描述', initial: true, label: '描述' },
		solutionImg: { type: Types.File, storage: storage('img/antenae/series'), label: '该系列图片' },
		solutionFile: { type: Types.File, storage: storage('files/antenae/series'), label: '下载文件' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);

AntenaeSeries.register();
