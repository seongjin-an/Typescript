console.log(Symbol('foo') === Symbol('foo'));
/* Symbol
 * symbol take primitive
 * inherence, immutable
 */

const sym = Symbol();
const sym2 = Symbol();

const obj = {
    [sym]: 'value'
}

console.log('obj:', obj);
console.log('obj[sym]:', obj[sym])