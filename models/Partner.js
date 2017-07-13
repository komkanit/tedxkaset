var keystone = require('keystone');
const { createField, combineFields } = require('keystone-translated-fields');

const locales = require('../constants').locales;
const Types = keystone.Field.Types;

const Speaker = new keystone.List('Parter', {
	map: {
		name: 'title',
	},
	singular: 'Parter',
	plural: 'Parters',
	autokey: {
		path: 'slug',
		from: 'title',
		unique: true,
	},
});

Speaker.add(combineFields([
	{ title: { type: String, required: true } },
	{ name: { type: String } },
	{ desc: { type: Types.Html, wysiwyg: true, height: 300 } },
	{ image: { type: Types.CloudinaryImage } },
	createField('about', { type: String }, locales),
]));

Speaker.register();
