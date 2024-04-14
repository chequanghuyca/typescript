// Với TS, rest parameter có các rules sau:
// - Rest parameter phải là tham số cuối cùng của function
// - Bạn chỉ được phép có một rest parameter trong function
// - Rest parameter không thể có kiểu optional hoặc default
// - Nếu bạn đặt rest parameter với kiểu array, bạn không thể truyền array vào function

// Cú pháp:
// function function_name(...rest: type[]) {
//     // code
// }

// Ví dụ:
function display(...rest: string[]) {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}
display('A', 'B', 'C', 'D', 'E');

// Ví dụ:
function display2(a: string, b: string, ...rest: string[]) {
    return a + b + rest.join(',');
}
console.log('>>> display2', display2('A', 'B', 'C', 'D', 'E')); // ABC,D,E
