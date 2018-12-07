var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * SolutionIndex Model
 * ==========
 */

var SolutionIndex = new keystone.List('solutionIndex');
SolutionIndex.add(
	'About Section', {
		aboutTitle: { type: Types.Text, initial: true, required: true, default: '公司介绍' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);


SolutionIndex.register();
