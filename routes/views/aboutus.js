const keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'aboutus';
	locals.titlePath = 'aboutus.title';

	view.query('aboutus', keystone.list('Aboutus').model.find());
	view.query('team', keystone.list('Team').model.find());

	view.render('aboutus');
};
