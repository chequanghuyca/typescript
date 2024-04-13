let skills: (string | number)[] = ['Hỏi Dân IT', 25];
skills.push('coding');
skills.push(69);

//tuple: dataType/size/order
let skills2: [string, number] = ['Hỏi Dân IT', 25];

let skills3: [boolean, string, number?];

skills3 = [true, 'Eric'];


// 'Tuple': a structure of data that has several parts

// Hoạt động giống như Array, tuy nhiên, có thêm một vài quy định bắt buộc:

//     - Số lượng phần tử của tuple cần được khai báo trước (cố định)
//     - Type của từng phần tử trong array cần được khai báo trước, và không nhất thiết phải giống nhau