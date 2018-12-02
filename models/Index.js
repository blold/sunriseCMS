var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Index Model
 * ==========
 */

var Home = new keystone.List('home');
Home.add(
	'About Section', {
		aboutTitle: { type: Types.Text, initial: true, required: true, default: '公司介绍' },
		aboutDesc: { type: Types.Text, initial: true, required: true, default: '专业 精致 创新' },
		aboutCompany: { type: Types.Text, initial: true, required: true, default: '广州桑瑞通信设备有限公司' },
		aboutCompanyDesc: { type: Types.Textarea, initial: true, required: true, default: '专注于智能微波雷达传感技术，致力于提供高精度数据的采集和应用解决方案，专业提供智能化解决方案包括相关软硬件技术产品的研发、生产、销售和服务为一体的国家级高新技术企业。公司本着“专业、精致、创新”的企业精神，坚持自主创新，提供的雷达传感器系列产品广泛应用于地质灾害监测、水库大坝监测、高速公路边坡监测；智能交通、雷达测速、位移、运动监测、化工液位测量等领域。' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);


Home.register();
