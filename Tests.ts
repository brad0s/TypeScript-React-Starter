//TypeScript: Dynamic variable inheritance
//            Dynamic method dispatch
class c1 {
    x: number;
    y: number;

    constructor() {
        return null;
    }
    setx1(v: number): number {
        this.x = v;
        return this.x;
    }
    sety1(v: number): number {
        this.y = v;
        return this.y;
    }
    getx1(): number {
        return this.x;
    }
    gety1(): number {
        return this.y;
    }
    m1(): number {
        return 1;
    }
    m2(): number {
        return this.m1();
    }
}

class c2 extends c1 {
    y: number;
    sety2(v: number): number {
        this.y = v;
        return this.y;
    }
    getx2(): number {
        return this.x;
    }
    gety2(): number {
        return this.y;
    }
    m1(): number {
        return 2;
    }
}

let o2 = new c2();
let o1 = new c1();
console.log(typeof o1);
o2.setx1(101);
o2.sety1(102);
o2.sety2(999);
console.log("o2.getx1(): "+o2.getx1()); //101
console.log("o2.gety1(): "+o2.gety1()); //999
console.log("o2.getx2(): "+o2.getx2()); //101
console.log("o2.gety2(): "+o2.gety2()); //999 dynamic varibale inheritance
console.log("");
console.log("o1.m1(): " + o1.m1()); //1
console.log("o2.m1(): "+ o2.m1()); //2
console.log("o2.m2(): "+ o2.m2()); //2 dynamic method dispatch