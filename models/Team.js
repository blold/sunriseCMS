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
 * Team Model
 * ==========
 */

var Team = new keystone.List('team');
Team.add(
	'Team Section', {
		name: { type: Types.Text, label: '姓名', note: '姓名' },
		title: { type: Types.Text, label: '职位／职称' },
		desc: { type: Types.Textarea, label: '个人描述' },
		img: { type: Types.File, storage: storage('img/team'), label: '头像图片' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);


Team.register();
