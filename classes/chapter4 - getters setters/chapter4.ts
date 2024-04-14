// Getter and Setter trong TS giúp chúng ta kiểm soát việc truy cập vào các thuộc tính của class.

// class Person6 {
//     public age: number;
//     public firstName: string;
//     public lastName: string;
// }

// let person6 = new Person6();
// person6.age = 30;

// Nếu cần validate biến age thì làm như thế nào?

// if (inputAge > 0 && inputAge < 150) {
//     this.age = inputAge;
// }

// Điều này dẫn đến kiểu dữ liệu private không thể truy cập vào class từ bên ngoài.


// ==> Để giải quyết vấn đề này, chúng ta sử dụng getter và setter.

class Person7 {
    private _age!: number;
    private _firstName1!: string;
    private _lastName1!: string;

    // Sử dụng ! để khai báo biến sẽ được gán giá trị sau.

    public get age(): number { // Getter
        return this._age;
    }

    public set age(value: number) { // Setter
        if (value <= 0 || value >= 150) {
            throw new Error('Please input valid age');
        }
        this._age = value;
    }

    public getFullName(): string { 
        return this._firstName1 + ' ' + this._lastName1;
    }
}

let person7 = new Person7();
person7.age = 30;
console.log('Sử dụng Getter và Setter: ', person7.age ); // 30
