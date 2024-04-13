const sum = (a: number, b: number): number => {
    return a + b;
}

const handleLogs = (message: string): void => {
    console.log(">>> message: ", message)
}

// Giới thiệu về void type:
//     - void type là một kiểu dữ liệu đặc biệt trong TypeScript, nó được sử dụng khi một hàm không trả về bất kỳ giá trị nào.
//     - Ví dụ: 
//         - Hàm không trả về giá trị: 
//             function logMessage(message: string): void {
//                 console.log(message);
//             }
//         - Hàm trả về giá trị: 
//             function sum(a: number, b: number): number {
//                 return a + b;
//             }


// Lợi ích khi sử dụng void type:
//     - Giúp chúng ta xác định rõ ràng rằng hàm không trả về giá trị nào.
//     - Giúp chúng ta tránh nhầm lẫn khi sử dụng hàm không trả về giá trị trong chương trình.