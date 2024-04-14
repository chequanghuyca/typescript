// Abstract: trừu tượng

// 1 abstract class có thể chứa:
//    1 hoặc nhiều normal methods
//    1 hoặc nhiều abstract methods: method mà không có phần thân (body) và chỉ định nghĩa (declare) tên method, kiểu trả về và kiểu tham số.

abstract class Person9 { 
    constructor(public name: string, public age: number) { 
        this.name = name;
        this.age = age;
    }

    // Abstract method
    abstract describe(): string;

    // Normal method
    getName(): string { 
        return this.name;
    }
}

// Với abstract class, chúng ta không thể tạo instance (object) từ abstract class.
// const a = new Person9('Huy', 30); // Error: Cannot create an instance of an abstract class.

class Employee3 extends Person9 {
    constructor(name: string, age: number, private department: string) {
        super(name, age);
        this.department = department;
    }

    // Overriding method
    describe(): string { 
        return `${super.getName()} works in ${this.department}`;
    }
}

let employee2 = new Employee('Huy', 30, 'IT');
console.log('Name: ', employee.getName()); // Huy