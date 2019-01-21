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
 * Cases Model
 * ==========
 */

var Cases = new keystone.List('cases', { defaultColumns: 'img1, img2, createdAt', sortable: true });
Cases.add(
	'Top Imagg Section', {
		img1: { type: Types.File, initial: true, storage: storage('img/cases'), label: '图片1', note: '推荐图片尺寸 1600*450' },
		img2: { type: Types.File, storage: storage('img/cases'), label: '图片2', note: '推荐图片尺寸 1600*450' },
		img3: { type: Types.File, storage: storage('img/cases'), label: '图片3', note: '推荐图片尺寸 1600*450' },
		img4: { type: Types.File, storage: storage('img/cases'), label: '图片4', note: '推荐图片尺寸 1600*450' },
		img5: { type: Types.File, storage: storage('img/cases'), label: '图片5', note: '推荐图片尺寸 1600*450' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);


Cases.register();
