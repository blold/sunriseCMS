var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Job Model
 * ==========
 */

var Job = new keystone.List('job', { defaultColumns: 'jobCategory, title, site, createdAt', sortable: true });
Job.add(
	'Main Section',
	{
		jobCategory: {
			type: Types.Select,
			initial: true,
			label: '职位类型',
			options: [
				{ label: '技术与科技', value: '技术与科技' },
				{ label: '管理及商务', value: '管理及商务' },
				{ label: '其他', value: '其他' },
			],
		},
		title: {
			type: Types.Text,
			default: '硬件设计工程师',
			initial: true,
			label: '职位标题',
			note: '不超过10字',
		},
		req: {
			type: Types.Html,
			wysiwyg: true,
			label: '职位要求',
		},
		duti: {
			type: Types.Html,
			wysiwyg: true,
			label: '工作内容',
		},
		site: {
			type: Types.Text,
			default: '广州',
			label: '工作地点',
			note: '不超过10字',
		},
		sal: {
			type: Types.Text,
			default: '面议',
			label: '工作薪资',
			note: '不超过20字',
		},
	},
	'Gerneral Field',
	{
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);

Job.register();
