var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'page';

	view.query('pages', keystone.list('Page').model.find());

	// Render the view
	view.render('gallery');

};
