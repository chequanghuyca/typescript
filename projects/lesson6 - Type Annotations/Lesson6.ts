let count2: number = 2;

console.log(">>> count2: ", count2);

let names2: string[] = ['Eric', 'Hỏi Dân IT', 'Typescript']
// array chỉ bao gồm string
names2.push('25') //error ?

console.log(">>> check name 2: ", names2)


// TypeScript sử dụng cú pháp:
// :type sau khi định nghĩa biến. Một khi đã khai báo type, chúng ta sẽ không thể thay đổi
// nó (static type)