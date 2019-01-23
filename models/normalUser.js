var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * NormalUser Model (dev...)
 * Ready for normal user who asking for full documentation
 * ==========
 */
var NormalUser = new keystone.List('normalUser');

NormalUser.add({
	name: { type: Types.Name, required: true, index: true },
	phone: { type: Types.phone, unique: true, index: true },
	email: { type: Types.Email, unique: true, index: true },
});

/**
 * Registration
 */
NormalUser.defaultColumns = 'name, email, isAdmin';
// NormalUser.register();
