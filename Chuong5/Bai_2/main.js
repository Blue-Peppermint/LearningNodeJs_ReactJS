/**
 * Bài 2: Tạo menu như sau:
 * -- CHỌN CHỨC NĂNG --

        Nhập mảng
        Xuất mảng
        Tìm số lớn nhất
        Tìm số nhỏ nhất
        Tính tổng
        Thoát


Khi chọn 1: Gọi hàm để nhập mảng
Khi chọn 2: Gọi hàm để xuất mảng
Khi chọn 3: Gọi hàm tìm số lớn nhất trong mảng
Khi chọn 4: Gọi hàm tìm số nhỏ nhất trong mảng
Khi chọn 5: Gọi hàm tính tổng các số trong mảng
Khi chọn 6: Thoát khỏi chương trình
 */

var array = [];

menu();

function menu() {

    while (true) {
        let selection = Number(prompt(`
        -- CHỌN CHỨC NĂNG --
    
            1. Nhập mảng
            2. Xuất mảng
            3. Tìm số lớn nhất
            4. Tìm số nhỏ nhất
            5. Tính tổng
            6. Thoát
    
        Mời bạn chọn:
        `));

        switch (selection) {
            case 1:
                array = input();
                break;
            case 2:
                console.log(`Mảng vừa nhập là :`);
                console.log(array);
                break;
            case 3:
                console.log(`Số lớn nhất trong mảng là : ${findMax(array)}`);
                break;
            case 4:
                console.log(`Số nhỏ nhất trong mảng là : ${findMin(array)}`);
                break;
            case 5:
                console.log(`Tổng các số trong mảng là : ${calTotal(array)}`);
                break;
            case 6:
                return;
            default:
                aleart('Mời bạn nhập giá trị từ khoảng [1; 6]');
                break;
        }
    }

}


function input() {
    let n = prompt(`Nhập số lượng phần tử của mảng :`);
    let value = [];

    for (let i = 0; i < n;) {
        value.push(prompt(`Nhập phần tử thứ ${++i} của mảng :`));
    }

    return value;
}


function calTotal(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (isNumeric(numbers[i])) {
            total += Number(numbers[i]);
        }
    }
    return total;
}

function findMax(numbers) {
    let max;
    for (let i = 0; i < numbers.length; i++) {
        if (isNumeric(numbers[i])) {
            max = numbers[i];
            break;
        }
    }


    for (let i = 1; i < numbers.length; i++) {
        if (isNumeric(numbers[i]) && Number(numbers[i]) > max) {
            max = numbers[i];
        }
    }
    return max;
}

function findMin(numbers) {
    let min;
    for (let i = 0; i < numbers.length; i++) {
        if (isNumeric(numbers[i])) {
            min = numbers[i];
            break;
        }
    }

    for (let i = 1; i < numbers.length; i++) {
        if (isNumeric(numbers[i]) && Number(numbers[i]) < min) {
            min = numbers[i];
        }
    }
    return min;
}

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}