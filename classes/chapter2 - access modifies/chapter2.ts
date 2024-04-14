// Access modifiers cung cấp kiểm soát truy cập vào các thành viên của class. TypeScript hỗ trợ 3 loại access modifiers:
// - public: Có thể truy cập từ bất kỳ đâu.
// - private: Chỉ có thể truy cập từ bên trong class.
// - protected: Chỉ có thể truy cập từ bên trong class hoặc các class kế thừa từ class đó.

// Ví dụ về public:
class Person2 {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
let person2 = new Person2('Huy', 30);
person2.display();

// Ví dụ về private:
class Person3 {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
let person3 = new Person3('Huy', 30);
// console.log(person3.name); // Error: 'name' is private
// console.log(person3.age); // Error: 'age' is private

// Ví dụ về protected:
class Person4 {
    protected name: string;
    protected age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Employee extends Person4 {
    private department: string;
    constructor(name: string, age: number, department: string) {
        super(name, age);
        this.department = department;
    }
    display(): void {
        super.display();
        console.log(`Department: ${this.department}`);
    }
}

let employee = new Employee('Huy', 30, 'IT');
employee.display();