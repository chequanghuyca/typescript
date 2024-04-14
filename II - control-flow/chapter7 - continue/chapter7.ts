// Tương tự như break, chúng ta có thể sử dụng continue để bỏ qua một vòng lặp trong một vòng lặp for, while, do while hoặc switch case.
// Nếu như break dùng để kết thúc vòng lặp, thì continue dùng để bỏ qua một vòng lặp và tiếp tục với vòng lặp tiếp theo.
// Ví dụ:
let b: number = 0;
while (b < 5) {
    b++;
    if (b === 3) {
        continue;
    }
    console.log(b);
}