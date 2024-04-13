// I. Syntax 1 function type gồm 2 phần chính:
//    - type của tham số
//    - type của return value

// Ví dụ:
function greet(name: string): string {
    return `Hello ${name}`;
}
console.log(greet('Huy')); // Hello Huy


// II. inferring function type
// TypeScript có thể suy luận kiểu dữ liệu của hàm mà không cần phải khai báo kiểu dữ liệu của hàm.
// Ví dụ:
let greet2 = (name: string) => {
    return `Hello ${name}`;
}
console.log(greet2('Huy')); // Hello Huy

