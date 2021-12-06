"use strict";
var _a;
console.log(Symbol('foo') === Symbol('foo'));
/* Symbol
 * symbol take primitive
 * inherence, immutable
 */
var sym = Symbol();
var sym2 = Symbol();
var obj = (_a = {},
    _a[sym] = 'value',
    _a);
console.log('obj:', obj);
console.log('obj[sym]:', obj[sym]);
