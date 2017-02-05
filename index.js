'use strict';

module.exports = input => {
	if (typeof input !== 'object') {
		throw new TypeError(`Expected object, got ${typeof input}`);
	}

	return Object.keys(input).map(key => {
		const value = input[key];

		return [key, value];
	});
};
