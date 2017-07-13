var keystone = require('keystone');
const { createField, combineFields } = require('keystone-translated-fields');
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
	createField('Name', { type: Types.Html, wysiwyg: true, height: 50 }, locales),
	createField('Position', { type: Types.Html, wysiwyg: true, height: 50 }, locales),
	{ image: { type: Types.CloudinaryImage } },
]));

Team.register();
