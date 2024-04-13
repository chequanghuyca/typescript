## I. Giới thiệu về union type

union ~ join

function addNumberOrString(a: any, b: any) {

    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concac(b);
    }

    throw new Error('Parameters must be number numbers ỏ strings!');

}

Nếu a và b đều là number thì tính tổng a + b
Nếu a và b đều là string thì nối chuỗi lại với nhau
Nếu a và b đều không phải là number hoặc string thì throw ra lỗi

Nếu chúng ta truyền vào đó: addNumberOrString(true, [1, 2, 4]) thì:
==> TS dịch code không lỗi do kiểu dữ liệu là any
==> Chạy code sẽ sinh ra throw

Chúng ta phải dùng union bằng hàm bên dưới:

function addNumberOrString(a: number | string, b: number | string) {

    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concac(b);
    }

    throw new Error('Parameters must be number numbers ỏ strings!');

}
