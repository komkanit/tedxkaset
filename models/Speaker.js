var keystone = require("keystone");
const Types = keystone.Field.Types;

const Speaker = new keystone.List('Speaker', {
	map: {
		name: 'title',
	},
	singular: 'Speaker',
	plural: 'Speakers',
	autokey: {
		path: 'slug',
		from: 'title',
		unique: true,
	},
});

Speaker.add({
	title: { type: String, required: true },
	name: { type: String },
	desc: { type: Types.Html, wysiwyg: true, height: 300 },
	image: { type: Types.CloudinaryImage },
});

Speaker.register();
