var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Index Model
 * ==========
 */

var MainHeader = new keystone.List('mainHeader');
MainHeader.add(
	'Landing Field', {
		title: { type: Types.Text, initial: true, required: true, default: 'SUNRISE' },
		first_desc: { type: Types.Text, initial: true, required: true, default: 'Welcome to 桑瑞' },
		first_catetory: { type: Types.Text, initial: true, required: true, default: '智慧城市发展, 微波雷达传感技术, 高精度数据采集和应用解决方案' },
		btn_beginJourne: { type: Types.Text, initial: true, required: true, default: '开始旅程' },
		beginProduct: { type: Types.Text, initial: true, required: true, default: '产品业务' },
	},
	'Main Header', {
		mainHeaderTitle: { type: Types.Text, initial: true, required: true, default: 'SUNRISE', label: 'Logo' },
		mainHeaderAbout: { type: Types.Text, initial: true, required: true, default: '关于', label: '导航栏1' },
		mainHeaderSolutionIndex: { type: Types.Text, initial: true, required: true, default: '解决方案', label: '导航栏2' },
		mainHeaderSolutionAntena: { type: Types.Text, initial: true, required: true, default: '通信', label: '导航栏2-1' },
		mainHeaderSolutionGeotech: { type: Types.Text, initial: true, required: true, default: '地质环境', label: '导航栏2-2' },
		mainHeaderSolutionElect: { type: Types.Text, initial: true, required: true, default: '水利电力', label: '导航栏2-3' },
		mainHeaderSolutionTraffic: { type: Types.Text, initial: true, required: true, default: '智能交通', label: '导航栏2-4' },
		mainHeaderSolutionChemist: { type: Types.Text, initial: true, required: true, default: '石油化工', label: '导航栏2-5' },
		mainHeaderNews: { type: Types.Text, initial: true, required: true, default: '新闻资讯', label: '导航栏3' },
		mainHeaderCases: { type: Types.Text, initial: true, required: true, default: '方案展示', label: '导航栏4' },
		mainHeaderTeam: { type: Types.Text, initial: true, required: true, default: '团队', label: '导航栏5' },
		mainHeaderRecruit: { type: Types.Text, initial: true, required: true, default: '招聘', label: '导航栏6' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}

);


MainHeader.register();
