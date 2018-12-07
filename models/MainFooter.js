var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * MainFooter Model
 * ==========
 */

var MainFooter = new keystone.List('mainFooter');
MainFooter.add(
	'Solutions Field', {
		solutionsMainTitle: { type: Types.Text, initial: true, required: true, default: '解决方案' },
	},
	'Main Header', {

	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}

);


MainFooter.register();
