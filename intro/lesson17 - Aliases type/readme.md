## Giới thiệu về Aliases type

Type aliases cho phép cho phép chúng ta tạo một kiểu type từ những kiểu type đã tồn tại.

Cú pháp: type alias = existingType;

Trong đó existingType: là tất cả những type hợp lệ của TS

Ví dụ:

type huyChe = string;

let message: huyche; // same as string type

Sử dụng aliases rất hữu ích với union type:

    - Before:
        let myVar: number | string | object | boolean = 'Huy Che';
        myVar = { a: 'def' } // error

    - After:
        type superType = number | string | object | boolean;
        let myVar: superType = 'just a test';
