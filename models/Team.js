var keystone = require('keystone');
const { createLocaleField, combineFields } = require('../utils.js');
const { locales } = require('../constants.js');

const Types = keystone.Field.Types;

const Team = new keystone.List('Team', {
	map: {
		name: 'name',
	},
	singular: 'Team',
	plural: 'Teams',
	autokey: {
		path: 'slug',
		from: 'name',
		unique: true,
	},
});

Team.add(combineFields([
	{ name: { type: String, required: true, initial: true } },
	createLocaleField('Name', { type: Types.Html, wysiwyg: true, height: 50 }, locales),
	createLocaleField('Position', { type: Types.Html, wysiwyg: true, height: 50 }, locales),
	{ image: { type: Types.CloudinaryImage } },
]));

Team.register();
