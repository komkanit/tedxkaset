var keystone = require('keystone');
const { createLocaleField, combineFields } = require('../utils.js');
const { locales } = require('../constants.js');

const Types = keystone.Field.Types;

const Speaker = new keystone.List('Speaker', {
	map: {
		name: 'name',
	},
	singular: 'Speaker',
	plural: 'Speakers',
	autokey: {
		path: 'slug',
		from: 'name',
		unique: true,
	},
});

Speaker.add(combineFields([
	{ name: { type: String, required: true, initial: true } },
	createLocaleField('description', { type: Types.Html, wysiwyg: true, height: 300 }, locales),
	{ image: { type: Types.CloudinaryImage } },
	{ facebook_url: { type: Types.Url } },
	{ twitter_url: { type: Types.Url } },
	{ linkedIn_url: { type: Types.Url } },
]));

Speaker.register();
