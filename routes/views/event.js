const keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'events';


	view.query('events', keystone.list('Event').model.find());
	view.query('speakers', keystone.list('Speaker').model.find());

	view.render('event');
};
