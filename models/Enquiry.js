var keystone = require('keystone');
var Types = keystone.Field.Types;

var Enquiry = new keystone.List('enquiry', {
	nocreate: true,
	defaultColumns: 'name, email, subject, createdAt',
});

Enquiry.add({
	name: { type: Types.Text, label: '姓名', required: true, noedit: true },
	email: { type: Types.Email, label: '邮箱', required: true, noedit: true },
	phone: { type: Types.Number, label: '手机', noedit: true },
	subject: { type: Types.Text, label: '主题', required: true, noedit: true },
	message: { type: Types.Textarea, label: '内容', required: true, noedit: true },
	createdAt: {
		type: Date,
		default: Date.now,
		noedit: true,
	},
});

Enquiry.track = true;
Enquiry.defaultColumns = 'name, email, phone, subject, createdAt';
Enquiry.register();
