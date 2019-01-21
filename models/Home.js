var keystone = require('keystone');
var Types = keystone.Field.Types;

var Storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/img'), // required; path where the files should be stored
		publicPath: '/public/uploads/img', // path where files will be served
	},
});

/**
 * Index Model
 * ==========
 */

var Home = new keystone.List('home', { singular: 'home', plural: 'home', defaultColumns: 'aboutTitle, aboutDesc, aboutCompany, createdAt', sortable: true });
Home.add(
	'About Section', {
		aboutTitle: { type: Types.Text, initial: true, required: true, default: '公司介绍', label: '关于我们-标题' },
		aboutDesc: { type: Types.Text, required: true, default: '专业 精致 创新', label: '关于我们-子标题' },
		aboutCompany: { type: Types.Text, required: true, default: '广州桑瑞通信设备有限公司', label: '关于我们-公司' },
		aboutCompanyDesc: { type: Types.Textarea, collapse: true, label: '关于我们-描述', default: '专注于智能微波雷达传感技术，致力于提供高精度数据的采集和应用解决方案，专业提供智能化解决方案包括相关软硬件技术产品的研发、生产、销售和服务为一体的国家级高新技术企业。公司本着“专业、精致、创新”的企业精神，坚持自主创新，提供的雷达传感器系列产品广泛应用于地质灾害监测、水库大坝监测、高速公路边坡监测；智能交通、雷达测速、位移、运动监测、化工液位测量等领域。' },
	},
	'Service Section', {
		serviceTitle: { type: Types.Text, initial: true, required: true, default: '解决方案', label: '方案-总标题' },
		serviceShortDesc: { type: Types.Text, initial: true, required: true, default: '提供更有竞争力的产品和服务，为客户创造更大价值', label: '方案-子标题' },
		service1Title: { type: Types.Text, required: true, default: '地质环境', label: '服务1标题' },
		service1Desc: { type: Types.Textarea, collapse: true, default: '采用高频雷达传感器，实时监测滑坡变化动向，提供直观的有价值的自然灾害预警信息，提高预警的效率和准确性，减少生命和财产损失', label: '服务1短描述' },
		service2Title: { type: Types.Text, required: true, default: '水利电力', label: '服务2标题' },
		service2Desc: { type: Types.Textarea, collapse: true, default: '大坝安全自动化监测系统实现了监测工程动态数据的采集、传输、数据汇集及设备控制自动化，为用户的现场监控、异地监视提供方便、高效、快捷的服务', label: '服务2短描述' },
		service3Title: { type: Types.Text, required: true, default: '智能交通', label: '服务3标题' },
		service3Desc: { type: Types.Textarea, collapse: true, default: '智能驾驶、雷达测速、无人飞机航拍测距、测速', label: '服务3短描述' },
		service4Title: { type: Types.Text, required: true, default: '石油化工', label: '服务4标题' },
		service4Desc: { type: Types.Textarea, collapse: true, default: '雷达物位计在化工装置各类液态介质不同工艺条件下均能实现液位的自动检测，提高了催化剂的生产自动化水平，成效显著', label: '服务4短描述' },
		service5Title: { type: Types.Text, required: true, default: '移动通信 地质环境', label: '服务5标题' },
		service5Desc: { type: Types.Textarea, collapse: true, default: '为国内外运营商客户提供移动网络覆盖及行业应用整体解决方案和服务', label: '服务5短描述' },
	},
	'News 1 Section', {
		subscribeTtile: { type: Types.Text, initial: true, required: true, default: '新闻中心', label: '轮转新闻-大标题' },
		subscribeTtile2: { type: Types.Text, required: true, default: 'NEWS', label: '轮转新闻-子标题' },
		subscribeNew1: {
			desc: { collapse: true, type: Types.Text, default: '习近平：大国重器必须掌握在我们自己手里', label: '轮转新闻1-短描述' },
			img: { type: Types.File, storage: Storage, label: '轮转新闻1-图片' },
			href: { collapse: true, type: Types.Url, note: '超链接, (格式： http://www.baidu.com)', label: '轮转新闻1-超链接' },
			// checkbox: { type: Boolean },
		},
		subscribeNew2: {
			desc: { collapse: true, type: Types.Text, default: '中国地质环境信息', label: '轮转新闻2-短描述' },
			img: { type: Types.File, storage: Storage, label: '轮转新闻2-图片' },
			href: { collapse: true, type: Types.Url, note: '超链接, (格式： http://www.baidu.com)', label: '轮转新闻2-超链接' },
			// checkbox: { type: Boolean },
		},
		subscribeNew3: {
			desc: { collapse: true, type: Types.Text, default: '智慧城市，让生活更美好', label: '轮转新闻3-短描述' },
			img: { type: Types.File, storage: Storage, label: '轮转新闻3-图片' },
			href: { collapse: true, type: Types.Url, note: '超链接, (格式： http://www.baidu.com)', label: '轮转新闻3-超链接' },
			// checkbox: { type: Boolean },
		},
	},
	'Cases Section', {
		porfolioTitle: { type: Types.Text, initial: true, required: true, default: '方案展示', label: '方案展示-大标题' },
		porfolioShortDesc: { type: Types.Text, required: true, default: '高起点、高标准是桑瑞公司的立足之本', label: '方案展示-小标题' },
		porfolio1: {
			img: { type: Types.File, storage: Storage, label: '方案展示1-图片' },
			title: { type: Types.Text, default: '移动通信', label: '方案展示-解决方案1', note: '移动通信' },
		},
		porfolio2: {
			img: { type: Types.File, storage: Storage, label: '方案展示2-图片' },
			title: { type: Types.Text, default: '地质灾害', label: '方案展示-解决方案2', note: '地质灾害' },
		},
		porfolio3: {
			img: { type: Types.File, storage: Storage, label: '方案展示3-图片' },
			title: { type: Types.Text, default: '水利水电', label: '方案展示-解决方案3', note: '水利水电' },
		},
		porfolio4: {
			img: { type: Types.File, storage: Storage, label: '方案展示4-图片' },
			title: { type: Types.Text, default: '交通', label: '方案展示-解决方案4', note: '交通' },
		},
		porfolio5: {
			img: { type: Types.File, storage: Storage, label: '方案展示5-图片' },
			title: { type: Types.Text, default: '石油化工', label: '方案展示-解决方案5', note: '石油化工' },
		},
	},
	// 'News 2 Section', {
	// 	new1: {
	// 		img: { type: Types.File, storage: Storage, label: '新闻1-图片' },
	// 		title: { type: Types.Text, default: '自动驾驶汽车到底需要哪些类型的传感器？', label: '新闻1-标题', note: '不超过10字' },
	// 		desc: { type: Types.Textarea, default: '在大多汽车行业专家看来，想要实现真正的全自动驾驶，雷达、摄像头和激光雷达三套系统都必不可少', label: '新闻1-描述', note: '不超过30字' },
	// 	},
	// 	new2: {
	// 		img: { type: Types.File, storage: Storage, label: '新闻2-图片' },
	// 		title: { type: Types.Text, default: '华为牵引5G核心网创新发展', label: '新闻2-标题', note: '不超过10字' },
	// 		desc: { type: Types.Textarea, default: 'MWC2018上，华为发布并展示了使能全接入、使能全业务的5G核心网解决方案，以助力电信运营商支撑未来日新月异的业务发展', label: '新闻2-描述', note: '不超过30字' },
	// 	},
	// 	new3: {
	// 		img: { type: Types.File, storage: Storage, label: '新闻3-图片' },
	// 		title: { type: Types.Text, default: '激光雷达、计算机视觉和雷达谁会赢？', label: '新闻3-标题', note: '不超过10字' },
	// 		desc: { type: Types.Textarea, default: '由于激光雷达价格高，产能低，许多公司都准备直接绕过高端激光雷达玩“曲线救国”，但其他技术真的可靠吗？激光雷达、计算视觉和雷达到底谁更重要呢？', label: '新闻3-描述', note: '不超过30字' },
	// 	},
	// },
	'Team Section', {
		teamTitle: { type: Types.Text, initial: true, required: true, default: '我们的团队', label: '主页团队-标题' },
		teamDesc: { type: Types.Text, required: true, default: '以人为本，是企业的核心', label: '主页团队-短描述' },
		team1: { type: Types.Relationship, ref: 'team', label: '主页团队-成员1' },
		team2: { type: Types.Relationship, ref: 'team', label: '主页团队-成员2' },
		team3: { type: Types.Relationship, ref: 'team', label: '主页团队-成员3' },
		team4: { type: Types.Relationship, ref: 'team', label: '主页团队-成员4' },
	},
	'Contact Section', {
		contactTitle: { type: Types.Text, initial: true, required: true, default: '联系我们', label: '主页联系-标题' },
		contactDesc: { type: Types.Text, required: true, default: '能人所未能、愿人所不愿、思人所匪思', label: '主页联系-标题' },
		address: { type: Types.Text, default: '广州市高新技术产业开发区科学城开源大道182号', label: '主页联系-公司地址' },
		contactEmail: { type: Types.Text, default: 'market@sangrui.com', label: '主页联系-联系邮箱' },
		contactPhone: { type: Types.Text, default: '(+86)2022203555', label: '主页联系-联系电话' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);


Home.register();
