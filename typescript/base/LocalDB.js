"use strict";
var LocalDB = /** @class */ (function () {
    function LocalDB(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    LocalDB.prototype.add = function (v) {
        v.serialize();
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    };
    LocalDB.prototype.get = function () {
        var v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    };
    return LocalDB;
}());
var TempoClass = /** @class */ (function () {
    function TempoClass() {
    }
    TempoClass.prototype.add = function (v) {
        throw new Error("Method not implemented.");
    };
    TempoClass.prototype.get = function () {
        throw new Error("Method not implemented.");
    };
    return TempoClass;
}());
var vehicle1 = {
    getItem: function () {
        return { m: '' };
    }
};
vehicle1.getItem();
