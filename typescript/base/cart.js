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
var Cart = /** @class */ (function () {
    function Cart(user) {
        this.user = user;
        this.store = {};
    }
    Cart.prototype.put = function (id, product) {
        // (this.store as any)[id] = product;
        this.store[id] = product;
    };
    Cart.prototype.get = function (id) {
        return this.store[id];
    };
    return Cart;
}());
var PromotionCart = /** @class */ (function (_super) {
    __extends(PromotionCart, _super);
    function PromotionCart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PromotionCart.prototype.addPromotion = function () {
        this.user;
    };
    return PromotionCart;
}(Cart));
var johnCart = new Cart({ name: 'john' });
var jayCart = new Cart({ name: 'jay' });
var cart2 = new PromotionCart({ name: 'cart2' });
