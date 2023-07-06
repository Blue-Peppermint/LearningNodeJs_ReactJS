/**
 * Bài 3: Tạo menu như sau:
 * 
 * -- CHỌN CHỨC NĂNG --

    1. Nhập mảng
    2. Xuất mảng
    3. In số nguyên tố
    4. In số hoàn hảo
    5. Đếm số 0
    6. Đếm số nguyên tố
    7. Đếm số hoàn hảo
    0. Thoát



Khi chọn 1: Gọi hàm tạo mảng gồm 100 phần tử là các số ngẫu nhiên từ 0 -> 99
Khi chọn 2: Gọi hàm xuất mảng
Khi chọn 3. In các số nguyên tố trong mảng
Khi chọn 4. In các số hoàn hảo trong mảng
Khi chọn 5. Đếm xem có bao nhiêu phần tử 0 trong mảng
Khi chọn 6. Đếm xem có bao nhiêu số nguyên tố trong mảng
Khi chọn 7. Đếm xem có bao nhiêu số hoàn hảo trong mảng
Khi chọn 8. Thoát khỏi chương trình
 */

menu();


function menu() {
    var array = [];
    let selection;
    while (true) {
        selection = Number(prompt(` -- CHỌN CHỨC NĂNG --

            1. Nhập mảng
            2. Xuất mảng
            3. In số nguyên tố
            4. In số hoàn hảo
            5. Đếm số 0
            6. Đếm số nguyên tố
            7. Đếm số hoàn hảo
            0. Thoát
        
            Mời bạn chọn chức năng:`));

        switch (selection) {
            case 1:
                array = input();
                break;
            case 2:
                alert(`Mảng vừa nhập là : ${array.join(', ')}`);
                console.log(array);
                break;
            case 3:
                printPrime(array);
                break;
            case 4:
                printPerfect(array);
                break;
            case 5:
                countZero(array);
                break;
            case 6:
                countPrime(array);
                break;
            case 7:
                countPerfect(array);
                break;
            case 0:
                return;
            default:
                alert('Mời bạn nhập giá trị từ khoảng [0; 7]');
                break;
        }
    }
}





function input() {
    let value = [];

    for (let i = 0; i < 100; i++) {
        value.push(Math.floor(Math.random() * 100));
    }

    return value;
}

function countZero(array) {
    let zeroCnt = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zeroCnt++;
        }
    }

    alert(`Tổng Lượng Số '0' Trong Mảng Là : ${zeroCnt}`);
}

function countPrime(array) {
    let primeCnt = 0;
    for (let i = 0; i < array.length; i++) {
        if (isPrime((array[i]))) {
            primeCnt++;
        }
    }

    alert(`Tổng Lượng Số Nguyên Tố Trong Mảng Là : ${primeCnt}`);
}

function countPerfect(array) {
    perfectCnt = 0;

    for (let i = 0; i < array.length; i++) {
        if (isPerfectNumber((array[i]))) {
            perfectCnt++;
        }
    }

    alert(`Tổng Lượng Số Hoàn Hảo Trong Mảng Là : ${perfectCnt}`);
}

function printPrime(array) {
    let result = [];
    let resultIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (isPrime((array[i]))) {
            result[resultIndex++] = array[i];
        }
    }

    alert(`Số Nguyên Tố Trong Mảng Là : ${result.join(', ')}`);
}

function printPerfect(array) {
    let result = [];
    let resultIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (isPerfectNumber((array[i]))) {
            result[resultIndex++] = array[i];
        }
    }

    alert(`Số Hoàn Hảo Trong Mảng Là : ${result.join(', ')}`);
}


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
