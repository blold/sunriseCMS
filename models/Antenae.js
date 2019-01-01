var keystone = require('keystone');
var Types = keystone.Field.Types;

// var Storage = new keystone.Storage({
// 	adapter: keystone.Storage.Adapters.FS,
// 	fs: {
// 		path: keystone.expandPath('./public/uploads/img/antenae'), // required; path where the files should be stored
// 		publicPath: '/public/uploads/img/antenae', // path where files will be served
// 	},
// });

/**
 * Antenae Model
 * ==========
 */

var Antenae = new keystone.List('antenae');
Antenae.add(
	'Top Section', {
		antenaeTitle: { type: Types.Text, default: '通讯领域', initial: true, label: '页面总标题', note: '不超过10字' },
		antenaeDesc: { type: Types.Html, wysiwyg: true, default: '桑瑞通信始终以技术创新为企业持续发展的核心，先后成功开发了达到国际先进水平的GSM、CDMA、3G、4G、LTE以及WiFi / WiMAX基站电调天线及其集中控制优化系统。通信产品主要包括移动通信基站天线、一体化美化天线、美化外罩产品等。同时，公司可根据客户需求，为其量身定做包括网络架构设计、产品配置选型、检测及优化服务等内容的移动覆盖综合解决方案。', initial: true, label: '页面总描述' },
	},
	'Main Section', {
		mainTitle1: { type: Types.Text, default: '通讯天线', initial: true, label: '主要标题', note: '不超过10字' },
		mainTitle2: { type: Types.Text, default: 'NBIOT', initial: true, label: '主要标题', note: '不超过10字' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);


Antenae.register();
