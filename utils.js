const reduce = require('lodash/reduce');
const get = require('lodash/get');

const createLocaleFieldName = function constructLocaleFieldName (name, locale) {
	return `${name}_${locale}`;
};

/**
 * Used to create translatable fields for dynamic content
 * @param  {String} name    Name for a field
 * @param  {Object} opts    Field options. Note: opts.type required by Keystone!
 * @param  {Array} locales  Array of used locales. E.g. ['th', 'en']
 * @return {Object}         Object with keys for localized fields. E.g. {name_th: opts, name_en: opts}
 */
exports.createLocaleField = function createLocaleField (name, opts, locales) {
	return reduce(locales, (fields, locale) => {
		return Object.assign({}, fields, { [createLocaleFieldName(name, locale)]: opts });
	}, {});
};

/**
 * Combine array of field objects, e.g. [{title: {type: String}}, {name: {type: String}}],
 * into one object, e.g. {title: {type: String}, name: {type: String}}
 * @param  {Array} fieldsArray [description]
 * @return {Object}             [description]
 */
exports.combineFields = function combineFields (fieldsArray) {
	return reduce(fieldsArray, (fields, field) => {
		return Object.assign({}, fields, field);
	});
};


/**
 * Get named and possibly translated field from model.
 * @param  {Object} model     A model
 * @param  {String} fieldName Field name without locale
 * @param  {String} locale    Locale
 * @return {Mixed}            Translated field if there is one, default to non-translated field.
 */
exports.getField = function getField (model, fieldName, locale) {
	return get(model, createLocaleFieldName(fieldName, locale), get(model, fieldName));
};
