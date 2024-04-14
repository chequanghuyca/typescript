// 1. readlonly chỉ có thể đọc không thể gán giá trị
//    TS cung cấp readonly để đánh dấu 1 thuộc tính immutable, nghĩa là chỉ có thể đọc không thể gán giá trị.

// Ví dụ:
class Person5 {
    readonly name: string;
    readonly age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let person5 = new Person5('Huy', 30);
// person5.name = 'Huy2'; // Error: Cannot assign to 'name' because it is a read-only property
// person5.age = 31; // Error: Cannot assign to 'age' because it is a read-only property
person5.display();

// 2. readonly với const
//    readonly và const khác nhau như thế nào?
//    readonly sử dụng thuộc tính của class
//    const sử dụng biến trong phạm vi của block