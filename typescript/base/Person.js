"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Korean = /** @class */ (function () {
    function Korean(name) {
        this.name = name;
    }
    Korean.prototype.say = function (msg) {
        console.log('msg:', msg);
    };
    return Korean;
}());
var KoreanProgrammer = /** @class */ (function (_super) {
    __extends(KoreanProgrammer, _super);
    function KoreanProgrammer(name, jumin) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.jumin = jumin;
        return _this;
    }
    KoreanProgrammer.prototype.writeCode = function (requirement) {
        console.log('requirement:', requirement);
        return requirement + '...';
    };
    KoreanProgrammer.prototype.say = function (message) {
        console.log('message:', message);
    };
    KoreanProgrammer.prototype.love = function () {
        console.log('love...');
    };
    return KoreanProgrammer;
}(Korean));
var koreanProgrammer = new KoreanProgrammer('ansj', 1);
koreanProgrammer.love();
