// Luôn bắt đầu bằng chữ hoa, và sử dụng camelcase. Tức là viết hoa chữ cái đầu của mỗi từ trong tên interface.
// Ngoài ra còn có thể sử dụng prefix I_ trước tên interface.

// Ví dụ:
interface Person {
    firstName: string;
    lastName: string;
}

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let user4 = { firstName: 'Huy', lastName: 'Che' };
console.log(getFullName(user4)); // Huy Che


// Optional properties
// Sử dụng dấu ? cuối tên các thuộc tính để khai báo 1 thuộc tính không bắt buộc phải khai báo.

interface Person2 {
    firstName: string;
    lastName?: string;
}

function getFullName2(person: Person2) {
    if (person.lastName) {
        return `${person.firstName} ${person.lastName}`;
    }

    return person.firstName;
}


// Readonly properties
// Sử dụng readonly trước tên thuộc tính để khai báo thuộc tính chỉ đọc, không thể sửa giá trị.

interface Person3 {
    readonly firstName: string;
    readonly lastName: string;
}

let person3: Person3 = { firstName: 'Huy', lastName: 'Che' };
// person3.firstName = 'Huy2'; // Error: Cannot assign to 'firstName' because it is a read-only property