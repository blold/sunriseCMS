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
 * About Model
 * ==========
 */

var About = new keystone.List('about', {defaultColumns: 'aboutTitle, vision1Title, vision2Title, vision3Title, createdAt' });
About.add(
	'Top Section', {
		aboutTitle: { type: Types.Text, default: '公司介绍', initial: true, label: '页面总标题', note: '必填，不超过10字' },
		aboutSubTitle: { type: Types.Text, default: '我们是谁？', label: '页面第二标题', note: '不超过10字' },
		aboutDesc1: { type: Types.Textarea, default: '广州桑瑞通信设备有限公司是一家专注于移动通信射频领域研发、生产、销售和服务于一体的国家级高新技术企业。公司的研发中心与生产中心占地面积约30000平方米，公司现有技术人员60人，其中研究生以上学历15人，本科学历20人，大专学历25人。研发中心分为雷达探测事业部与基站天线事业部两个部门。研发中心经过近10年的产品研发积累了丰富经验。现已拥有射频方面核心技术知识产权近30项，在射频研发设计和批量生产方面有较深的技术积累和丰富的经验。 ', label: '关于我们-描述1' },
		aboutDesc2: { type: Types.Textarea, default: '在研发技术创新方面，公司通过多种形式吸引高层次人才到企业从事研究开发工作，提高企业技术创新能力，使一大批具有创新精神、年富力强的优秀中青年人才脱颖而出，在高科技岗位上实现着自己的人生价值。在技术创新投入上，突出企业的主体地位，每年以不低于销售收入的10%投入到科技研发上来，通过各项创新战略的有效实施，我司基站天线产品质量均处于业内领先地位，同时雷达探测事业部自主研发的24GHz雷达探测传感器已实现批量应用。高起点、高标准是桑瑞公司立足之本。 桑瑞通信在2018年4月分别组建成立广州桑瑞环保科技有限公司和广州桑瑞科技有限公司。 桑瑞科技将传承桑瑞通信的天线制造理念，继续与运营商合作开发和生产适合国内外不同用户需求的天线产品，并将提供更加专业和个性化的服务。桑瑞环保将聚焦战略，自主研发，以用户需求和前沿技术驱动创新，致力于提供高精度数据的采集和应用解决方案，提供雷达传感器系列产品，应用于地质灾害环境监测、水库大坝监测、智能驾驶、雷达测速、无人飞机航拍测距、测速；提供非接触性的雷达物位计，解决石油化工行业中的液体、浆料及颗粒物的物位精准测量问题。桑瑞通信将始终秉承“专业、精致、创新”的企业精神，与我们的客户及合作伙伴一道携手并进、共创辉煌！', label: '关于我们-更多描述' },
	},
	'Vision Secion', {
		visionTitle: { type: Types.Text, default: '我们的理念', initial: true, label: '愿景总标题', note: '必填，不超过10字' },
	},
	'Vision 1', {
		vision1Title: { type: Types.Text, default: '专业', initial: true, label: '愿景1-标题', note: '必填，不超过10字' },
		vision1Desc: { type: Types.Textarea, default: '公司从事多年射频和雷达产品研发、制造与销售。现有技术人员60人，其中研究生以上学历15人，本科学历20人，大专学历25人。', initial: true, label: '愿景1-描述', note: '不超过70字' },
	},
	'Vision 2', {
		vision2Title: { type: Types.Text, default: '精致', initial: true, label: '愿景2-标题', note: '必填，不超过10字' },
		vision2Desc: { type: Types.Textarea, default: '产品+服务，自主研发，满足大众客户需求，同时发展定制性业务.', initial: true, label: '愿景2-描述', note: '不超过70字' },
	},
	'Vision 3', {
		vision3Title: { type: Types.Text, default: '创新', initial: true, label: '愿景3-标题', note: '必填，不超过10字' },
		vision3Desc: { type: Types.Textarea, default: '拥有射频方面核心技术知识产权近30项，在射频研发设计和批量生产方面有较深的技术积累和丰富的经验。', initial: true, label: '愿景3-描述', note: '不超过70字' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);


About.register();
