const keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'speakers';

	// Load speakers
	view.query('speakers', keystone.list('Speaker').model.find());

	view.render('speakers');
};
