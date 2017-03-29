var keystone = require('keystone');

const Aboutus = new keystone.List('Aboutus', {
	map: {
		name: 'title',
	},
	singular: 'Aboutus',
	autokey: {
		path: 'slug',
		from: 'title',
		unique: true,
	},
});

Aboutus.register();
