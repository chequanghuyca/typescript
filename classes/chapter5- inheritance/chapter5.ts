// Một class có thể tái sử dụng các thuộc tính (properties) và phương thức (method) của class khác thông qua inheritance.
// Đây gọi là tính kế thừa (inheritance) trong lập trình hướng đối tượng.
// Bằng cách sử dụng tính kế thừa chúng ta không cần phải viết lại các thuộc tính và phương thức của class cha trong class con.

class Person8 {
    constructor(public name: string, public age: number) { 
        this.name = name;
        this.age = age;
    }

    getName(): string { 
        return this.name;
    }

    getAge(): number { 
        return this.age;
    }
}

// Để kế thừa một class, chúng ta sử dụng từ khóa extends.

class Employee extends Person8 {
    constructor(name: string, age: number, private department: string) {
        super(name, age);
        this.department = department;
    }

    // Overriding method 
    // Nếu class con muốn thay đổi cách thức hoạt động của method của class cha, chúng ta có thể sử dụng overriding. Ghi đè lên method của class cha.
    describe(): string { 
        return `${super.getName()} works in ${this.department}`;
    }
}

let employee = new Employee('Huy', 30, 'IT');
console.log('Name: ', employee.getName()); // Huy
console.log('Age: ', employee.getAge()); // 30
console.log('Department: ', employee.describe()); // Huy works in IT