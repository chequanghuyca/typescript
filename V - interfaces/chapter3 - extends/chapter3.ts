// Extends: class extends class, interface extends interface
// Implements: class implements interface

// Class kế thừa lại interface để có những thuộc tính và function bắt buộc phải có, ngoài ra có thể định nghĩa thêm các class/method của riêng nó.
// Ví dụ:
interface IEmployee { 
    name: string;
    age: number;


    getName: (name: string) => string;
}

class Employee5 implements IEmployee {
    name: string;
    age: number;

    constructor(name: string, age: number) { 
        this.name = name;
        this.age = age;
    }

    getName(name: string): string { 
        return name;
    }
}

let employee3 = new Employee5('Huy', 30);


// interface extends interface
interface IEmployee2 extends IEmployee {
    department: string;
}

class Employee6 implements IEmployee2 {
    name: string;
    age: number;
    department: string;

    constructor(name: string, age: number, department: string) { 
        this.name = name;
        this.age = age;
        this.department = department;
    }

    getName(name: string): string { 
        return name;
    }
}

let employee4 = new Employee6('Huy', 30, 'IT');



// interface extends multiple interfaces
interface IEmployee3 {
    name: string;
    age: number;
}

interface IManager {
    department: string;
}

interface IManagerEmployee extends IEmployee3, IManager {
    role: string;
}

class Employee7 implements IManagerEmployee {
    name: string;
    age: number;
    department: string;
    role: string;

    constructor(name: string, age: number, department: string, role: string) { 
        this.name = name;
        this.age = age;
        this.department = department;
        this.role = role;
    }
}

let employee5 = new Employee7('Huy', 30, 'IT', 'Manager');