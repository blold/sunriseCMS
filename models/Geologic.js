var keystone = require('keystone');
var Types = keystone.Field.Types;


/**
 * Geologic Model
 * ==========
 */

var Geologic = new keystone.List('geologic', { defaultColumns: 'geologicTitle, mainTitle, createdAt' });
Geologic.add(
	'Top Section', {
		geologicTitle: { type: Types.Text, default: '地质环境', initial: true, label: '页面总标题', note: '不超过10字' },
		geologicDesc: { type: Types.Html, wysiwyg: true, default: '常见的地质灾害主要有地震、地裂缝、地面沉降、岩溶塌陷、滑坡、崩塌以及泥石流等。桑瑞环保提供的雷达监测系统使用了高频、宽频带、短脉冲及高速采样等技术,能无损、快速、准确地进行探测，在工程建设、地灾防治以及其它领域的作用日益显著。', label: '页面总描述' },
	},
	'Main Section', {
		mainTitle: { type: Types.Text, default: '通讯天线', initial: true, label: '主要标题', note: '不超过10字' },

	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);


Geologic.register();
