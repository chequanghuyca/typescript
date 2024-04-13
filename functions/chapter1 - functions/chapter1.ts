// Function chính là một khối mã có thể được gọi bất kỳ lúc nào và từ bất kỳ đâu. Có khả năng tái sử dụng mã là một trong những lợi ích lớn nhất của việc sử dụng hàm.
// Để định nghĩa một hàm trong TypeScript, chúng ta sử dụng từ khóa function, sau đó là tên hàm và cuối cùng là một khối mã chứa mã của hàm.
// Ví dụ:
function greet() {
    console.log('Hello World');
}
greet(); // Hello World

// Hàm có thể nhận tham số và trả về giá trị. Để định nghĩa kiểu dữ liệu của tham số và kiểu dữ liệu trả về của hàm, chúng ta sử dụng dấu hai chấm (:).
// Ví dụ:
function greet2(name: string): string {
    return `Hello ${name}`;
}
console.log(greet2('Huy')); // Hello Huy


// Hàm arrow function là một cú pháp ngắn gọn để định nghĩa hàm trong TypeScript.
// Ví dụ:
let greet3 = () => {
    console.log('Hello World');
}
greet3(); // Hello World

// Hàm arrow function có thể nhận tham số và trả về giá trị.
// Ví dụ:
let greet4 = (name: string): string => {
    return `Hello ${name}`;
}
console.log(greet4('Huy')); // Hello Huy