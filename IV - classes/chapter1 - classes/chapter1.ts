// Với TS class nó không giống với các ngôn ngữ khác, nó không có constructor mặc định, nếu bạn muốn sử dụng constructor thì bạn phải khai báo constructor.

// Ví dụ:
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let person = new Person('Huy', 30);
person.display();