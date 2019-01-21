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
 * GeologicOther Model
 * ==========
 */

var GeologicOther = new keystone.List('geologic_other', { defaultColumns: 'otherFileName, otherFile, createdAt', sortable: true });
GeologicOther.add(
	'Main Section', {
		otherFileName: { type: Types.Text, initial: true, default: '其他文件-名称', label: '其他文件-名称', note: '不超过10字' },
		otherFile: { type: Types.File, storage: storage('files/geologic/other'), label: '其他文件下载' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);

GeologicOther.register();
