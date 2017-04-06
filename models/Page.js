var keystone = require('keystone');
const Types = keystone.Field.Types;
const BasePage = require('./BasePage');
const { createLocaleField } = require('../utils');

var Page = new keystone.List('Page', { inherits: BasePage });
Page.add(
	createLocaleField('content', { type: Types.Html, wysiwyg: true })
);
Page.schema.statics.view_name = 'generic_page';
Page.register();
