const keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'aboutus';

	view.query('aboutus', keystone.list('Aboutus').model.find());

	view.render('aboutus');
};