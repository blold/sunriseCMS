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
 * JobPage Model
 * ==========
 */

var JobPage = new keystone.List('jobPage', { defaultColumns: 'bigRotateTitle1, mainTitle, contactPerson, contactPhone, contactEmail, createdAt' });
JobPage.add(
	'Top Section',
	{
		bigRotateTitle1: {
			type: Types.Text,
			initial: true,
			default: '有想法',
			label: '轮转文字1',
			note: '不超过5字',
		},
		bigRotateTitle2: {
			type: Types.Text,
			initial: true,
			default: '有热情',
			label: '轮转文字2',
			note: '不超过5字',
		},
		bigRotateTitle3: {
			type: Types.Text,
			initial: true,
			default: '有能力',
			label: '轮转文字3',
			note: '不超过5字',
		},
		bigStaticTitle: {
			type: Types.Text,
			initial: true,
			default: '的你，我们在等着',
			label: '静态文字',
			note: '不超过10字',
		},
	},
	'Main Section',
	{
		mainTitle: {
			type: Types.Text,
			initial: true,
			default: '你想做什么？',
			label: '主标题',
			note: '不超过20字',
		},
	},
	'TechJob Section',
	{
		techJobTitle: {
			type: Types.Text,
			default: '技术与科技',
			label: '技术工作招聘板块-标题',
			note: '不超过10字',
		},
		techJobImage: {
			type: Types.File,
			storage: storage('img/job'),
			label: '技术与科技-图片',
		},
		techJobDesc: {
			type: Types.Textarea,
			default: '',
			label: '技术工作招聘板块-描述',
			note: '不超过50字',
		},
	},
	'BusiJob Section',
	{
		busiJobTitle: {
			type: Types.Text,
			default: '管理及商务',
			label: '管理及商务招聘板块-标题',
			note: '不超过10字',
		},
		busiJobImage: {
			type: Types.File,
			storage: storage('img/job'),
			label: '管理及商务-图片',
		},
		busiJobDesc: {
			type: Types.Textarea,
			default: '',
			label: '管理及商务招聘板块-描述',
			note: '不超过50字',
		},
	},
	'OtherJob Section',
	{
		otherJobTitle: {
			type: Types.Text,
			default: '其他',
			label: '其他招聘板块-标题',
			note: '不超过10字',
		},
		otherJobImage: {
			type: Types.File,
			storage: storage('img/job'),
			label: '其他-图片',
		},
		otherJobDesc: {
			type: Types.Textarea,
			default: '',
			label: '其他招聘板块-描述',
			note: '不超过50字',
		},
	},
	'footer Contact Section', {
		contactPerson: {
			type: Types.Text,
			default: '示例: 赵小姐',
			label: '联系人',
			note: '不超过10字',
		},
		contactPhone: {
			type: Types.Text,
			default: '示例: 22203555-3547',
			label: '联系电话',
		},
		contactEmail: {
			type: Types.Email,
			default: '示例：recruit@sangrui.com',
			label: '联系邮箱',
		},
	},
	'Gerneral Field',
	{
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);

JobPage.register();
