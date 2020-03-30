'use strict';

var callBind = require('es-abstract/helpers/callBind');
var $replace = callBind(String.prototype.replace);

/* eslint-disable no-control-regex */
var rightWhitespace = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]*$/;
/* eslint-enable no-control-regex */

module.exports = function trimRight() {
	return $replace(this, rightWhitespace, '');
};
