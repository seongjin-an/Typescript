"use strict";
function createPromise(x, timeout) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(x);
        }, timeout);
    });
}
createPromise("1", 100).then(function (v) { return console.log(v); });
function createTuple(v, v2) {
    return [v, v2];
}
var t1 = createTuple("user1", 1000);
