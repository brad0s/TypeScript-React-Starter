var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//TypeScript: Dynamic variable inheritance
//            Dynamic method dispatch
var c1 = /** @class */ (function () {
    function c1() {
        return null;
    }
    c1.prototype.setx1 = function (v) {
        this.x = v;
        return this.x;
    };
    c1.prototype.sety1 = function (v) {
        this.y = v;
        return this.y;
    };
    c1.prototype.getx1 = function () {
        return this.x;
    };
    c1.prototype.gety1 = function () {
        return this.y;
    };
    c1.prototype.m1 = function () {
        return 1;
    };
    c1.prototype.m2 = function () {
        return this.m1();
    };
    return c1;
}());
var c2 = /** @class */ (function (_super) {
    __extends(c2, _super);
    function c2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    c2.prototype.sety2 = function (v) {
        this.y = v;
        return this.y;
    };
    c2.prototype.getx2 = function () {
        return this.x;
    };
    c2.prototype.gety2 = function () {
        return this.y;
    };
    c2.prototype.m1 = function () {
        return 2;
    };
    return c2;
}(c1));
var o2 = new c2();
var o1 = new c1();
console.log(typeof o1);
o2.setx1(101);
o2.sety1(102);
o2.sety2(999);
console.log("o2.getx1(): " + o2.getx1()); //101
console.log("o2.gety1(): " + o2.gety1()); //999
console.log("o2.getx2(): " + o2.getx2()); //101
console.log("o2.gety2(): " + o2.gety2()); //999 dynamic varibale inheritance
console.log("");
console.log("o1.m1(): " + o1.m1()); //1
console.log("o2.m1(): " + o2.m1()); //2
console.log("o2.m2(): " + o2.m2()); //2 dynamic method dispatch
