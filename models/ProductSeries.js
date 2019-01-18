var keystone = require('keystone');
var Types = keystone.Field.Types;

function storage (path) {
	return new keystone.Storage({
		adapter: keystone.Storage.Adapters.FS,
		fs: {
			path: keystone.expandPath(`./public/uploads/${path}`), // required; path where the files should be stored
			publicPath: `/public/uploads/${path}`, // path where files will be served
			generateFilename: function (file, attemptNumber) {
				var originalname = file.originalname;
				// var filenameWithoutExtension = originalname.substring(0, originalname.lastIndexOf('.'));
				var timestamp = new Date().getTime();
				return `${timestamp}-${originalname}`;
			},
		},
		schema: {
			originalname: true,
			url: true,
		},
	});
}

/**
 * ProuctSeries Model
 * ==========
 */

// function getProductsInfo () {
// 	let Products = keystone.list('products');
// 	let products = Products.model.find({}).sort({ createdAt: 'desc' });
// 	products.then((d) => { return d.Title; });
// 	// console.log(products);
// };
// getProductsInfo();

var ProuctSeries = new keystone.List('product_series', { defaultColumns: 'createdAt' });
ProuctSeries.add(
	'Main Section', {
		productTitle: { type: Types.Text, default: '该产品名称', initial: true, label: '产品名称', note: '不超过10字' },
		productShortDesc: { type: Types.Text, default: '该产品简述', initial: true, label: '产品简述', note: '不超过20字' },
		productType: { type: Types.Select, label: '产品类型', initial: true, options: ['通信类', '雷达类'] },
		productDesc: { type: Types.Textarea, default: '该产品详细描述', label: '产品描述' },
		productImg: { type: Types.File, storage: storage('img/products'), label: '产品图片', note: '推荐像素480 × 360' },
	},
	'Tech Details', {
		// tech1_name: { type: Types.Text, default: '参数1名称', label: '参数1名称', note: '不超过10字' },
		// tech1_value: { type: Types.Text, default: '参数1参数', label: '参数1参数', note: '不超过10字' },
		// tech2_name: { type: Types.Text, default: '参数2名称', label: '参数2名称', note: '不超过10字' },
		// tech2_value: { type: Types.Text, default: '参数2参数', label: '参数2参数', note: '不超过10字' },
		// tech3_name: { type: Types.Text, default: '参数3名称', label: '参数3名称', note: '不超过10字' },
		// tech3_value: { type: Types.Text, default: '参数3参数', label: '参数3参数', note: '不超过10字' },
		// tech4_name: { type: Types.Text, default: '参数4名称', label: '参数4名称', note: '不超过10字' },
		// tech4_value: { type: Types.Text, default: '参数4参数', label: '参数4参数', note: '不超过10字' },
		// tech5_name: { type: Types.Text, default: '参数5名称', label: '参数5名称', note: '不超过10字' },
		// tech5_value: { type: Types.Text, default: '参数5参数', label: '参数5参数', note: '不超过10字' },
		// tech6_name: { type: Types.Text, default: '参数6名称', label: '参数6名称', note: '不超过10字' },
		// tech6_value: { type: Types.Text, default: '参数6参数', label: '参数6参数', note: '不超过10字' },
		// tech7_name: { type: Types.Text, default: '参数7名称', label: '参数7名称', note: '不超过10字' },
		// tech7_value: { type: Types.Text, default: '参数7参数', label: '参数7参数', note: '不超过10字' },
		// tech8_name: { type: Types.Text, default: '参数8名称', label: '参数8名称', note: '不超过10字' },
		// tech8_value: { type: Types.Text, default: '参数8参数', label: '参数8参数', note: '不超过10字' },
		tech_details: { type: Types.Html, wysiwyg: true, height: 400 },
		productFile: { type: Types.File, storage: storage('files/products/series'), label: '该产品-完整技术文档' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);

ProuctSeries.register();
