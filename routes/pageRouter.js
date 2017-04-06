var keystone = require('keystone');
var views = keystone.importer(__dirname)('./views');

exports = module.exports = function (req, res) {
	var locals = res.locals;
	var q = keystone.list('BasePage').model.findOne({
		pageSlug: req.params.slug,
	});
	q.exec(function (err, result) {
		if (!result) {
			return res.status(404).send('Page Not Found!');
		}
		locals.page = result;
		console.log(result.constructor.view_name, views);
		if (result.constructor.view_name) {
			return views[result.constructor.view_name](req, res);
		} else {
			return views.standard_page(req, res);
		}
	});
};
