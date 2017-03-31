var keystone = require('keystone');
const Types = keystone.Field.Types;

const Event = new keystone.List('Event', {
	map: {
		name: 'title',
	},
	singular: 'Event',
	plural: 'Events',
	autokey: {
		path: 'slug',
		from: 'title',
		unique: true,
	},
});

Event.add({
	title: { type: String, require: true },
	name: { type: String },
	desc: { type: Types.Html, wysiwyg: true, height: 300 },
	image: { type: Types.CloudinaryImage },
});

Event.register();
