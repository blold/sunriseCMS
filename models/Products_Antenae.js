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
// 	let products = Products.model.find({}).sort({ sortOrder: 1 });
// 	products.then((d) => { return d.Title; });
// 	// console.log(products);
// };
// getProductsInfo();

var ProuctSeries_Antenae = new keystone.List('products_antenae', { defaultColumns: 'productTitle, productShortDesc, createdAt', sortable: true });
ProuctSeries_Antenae.add(
	'Main Section', {
		productTitle: { type: Types.Text, default: '该产品名称', initial: true, label: '产品名称', note: '不超过10字' },
		productShortDesc: { type: Types.Text, default: '该产品简述', initial: true, label: '产品简述', note: '不超过20字' },
		productType: { type: Types.Text, label: '产品类型', noedit: true, default: '通信类' },
		productDesc: { type: Types.Textarea, default: '该产品详细描述', label: '产品描述' },
		productImg: { type: Types.File, storage: storage('img/products'), label: '产品图片', note: '推荐像素480 × 360' },
	},
	'Tech Details', {
		tech_details: { type: Types.Html, wysiwyg: true, height: 400 },
		productFile: { type: Types.File, storage: storage('files/products/series'), label: '该产品-完整技术文档' },
	},
	'Gerneral Field', {
		createdAt: { type: Date, default: Date.now, noedit: true },
	}
);

ProuctSeries_Antenae.register();
