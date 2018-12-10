var keystone = require('keystone');
var Types = keystone.Field.Types;

var Enquiry = new keystone.List('enquiry', {
	nocreate: true,
	defaultColumns: 'name, email, subject, createdAt',
});

Enquiry.add({
	name: { type: Types.Text, required: true, noedit: true },
	email: { type: Types.Email, required: true, noedit: true },
	subject: { type: Types.Text, required: true, noedit: true },
	message: { type: Types.Textarea, required: true, noedit: true },
	createdAt: {
		type: Date,
		default: Date.now,
		noedit: true,
	},
});

Enquiry.track = true;
Enquiry.defaultColumns = 'name, email, subject, createdAt';
Enquiry.register();
