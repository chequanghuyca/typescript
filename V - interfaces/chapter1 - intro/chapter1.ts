// TypeScript Interface định nghĩa cách chúng ta viết code bằng cách cung cấp các quy tắc để kiểm soát chặt chẽ hơn việc khai báo kiểu dữ liệu cho biến, object, function.

// Ví dụ:
function getFullName3(person: { firstName: string, lastName: string }) {
    return `${person.firstName} ${person.lastName}`;
}

let user = { firstName: 'Huy', lastName: 'Che' };
console.log(getFullName3(user)); // Huy Che

// Trong ví duj trên check các tham số truyền vào hàm getFullName phải có 2 thuộc tính firstName và lastName, nếu khác type sẽ báo lỗi.
// Để giải quyết vấn đề trên chúng ta sử dụng interface.