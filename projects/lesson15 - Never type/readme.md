## I.Giới thiệu về never type

    Any: trả về bất kỳ kiểu dữ liệu nào (áp dụng cho function và variable)
    Void: trả về undefined hoặc null (áp dụng cho function)
    Never: không bao giờ trả về giá trị(áp dụng cho function)

    - Khi nào sử dụng never type:
        Khi function không bao giờ trả về giá trị hoặc function luôn throw exception.
        Ví dụ:
            - Function throw exception
            - Function vòng lặp vô hạn
            - Function chết (dead code)
    - Ví dụ:
        function handleException(errorMessage: string): never {
            throw Error(errorMessage)
        }

        function runInfinity(): void {
            while (true) {
                console.log('running...')
            }
        }

        handleException('just a test error');
        runInfinity();

    ==> never type được dùng để ám chỉ một giá trị sẽ không bao giờ xảy ra. Ví dụ như một hàm sẽ
    throw exception, hoặc một hàm sẽ chạy vô hạn.

## Phân biệt Never và Void

    Khi sử dụng void cho function, thực ra nó trả ra 'undefined'
        function logging(): void {
            console.log('Server logging...');
        }

        let check: void = logging();
        console.log('>>> check: ', check); //undefined
