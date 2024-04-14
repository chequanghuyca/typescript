// Do while trong TypeScript cũng hoạt động tương tự như trong JavaScript.
// Giống như while loop, do while loop cũng được sử dụng để lặp qua một khối mã nếu điều kiện được cung cấp là true.
// Tuy nhiên, do while loop sẽ chạy ít nhất một lần trước khi kiểm tra điều kiện.
// Ví dụ:
let i: number = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// Output:
// 0