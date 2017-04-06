var keystone = require('keystone');
const { combineFields, createLocaleField } = require('../utils');

var BasePage = new keystone.List('BasePage', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});
BasePage.add(combineFields([
	{
		slug: { type: String, readonly: true },
		publishedDate: { type: Date, default: Date.now },
		title: { type: String, required: true },
	},
	createLocaleField('metaDescription', { type: String }),
]));

BasePage.defaultColumns = ['title', 'slug', 'publishedDate'];

BasePage.register();

exports = module.exports = BasePage;
