enum API_STATUS {
    PENDDING,
    FULFILLED = 'FULFILLED asfdasfasf',
    REJECTED = 'FULFILLED' //PROMISE
}

//constant
//java

let a1 = API_STATUS.PENDDING;
let a2 = API_STATUS.FULFILLED;

//frontend : syntax
console.log('>>> a1 = ', a1, ' a2 = ', a2);


//     - Enum type là một kiểu dữ liệu đặc biệt trong TypeScript, nó cho phép chúng ta định nghĩa một tập hợp các hằng số có thể sử dụng trong chương trình.
//     - Ví dụ: STATUS = [ PENDING, SUCCESS, FAILED]
    
//     Để định nghĩa enum:
//         - Sử dụng keyword enum, và 'tên' cho enum

//         - Định nghĩa các giá trị hằng số enum name { constant1, constant2,...};