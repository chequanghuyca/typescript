// let count = 'Hoi Dan IT';
// count = 10; ts nó sẽ tự đoán và báo sai ngay lập tức

let count: number = 10;
console.log('>>> check count 0 = ', count);
// Cannot redeclare block-scoped variable 'count'
// Trong TypeScript, bạn không thể khai báo lại một biến đã được khai báo trong cùng một phạm vi. 


// let test = ['huy', 'che', 'typescirpt', 90];
// test.push(25);
// console.log('>>> check test 0 = ', test);
// như vậy thì đúng vì mảng test có thể chứa nhiều kiểu dữ liệu khác nhau, như ví dụ trên thì test có kiểu dữ liệu là object

let names: (string | number)[] = ['huy', 'che', 'typescirpt', 4444];

names.push(25);
console.log('>>> check test 0 = ', names);