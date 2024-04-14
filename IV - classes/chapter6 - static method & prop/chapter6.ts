// Static method & properties
// Để truy cập 1 method static: <ClassName>.<StaticMethod>()


// Chúng ta sử dụng class name và dot notation mà không cần tạo mới 1 object
class Circle {
    static pi: number = 3.14;

    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}

Circle.pi; // 3.14
Circle.calculateArea(5); // 78.5



//Static và non-static method
// Static method không thể truy cập vào non-static method và non-static property
class Circle2 {
    static pi: number = 3.14;
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }

    calculateCircumference() {
        return 2 * Circle2.pi * this.radius;
    }
}

Circle2.pi; // 3.14
Circle2.calculateArea(5); // 78.5
let circle2 = new Circle2(5);
circle2.calculateCircumference(); // 31.4
