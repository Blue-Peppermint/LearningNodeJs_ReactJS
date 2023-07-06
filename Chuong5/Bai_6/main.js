/**
 * Bài 6: Áp dụng những gi học được ở bài 4 để làm bài sau:
 * 
Tạo menu như sau:
-- CHỌN CHỨC NĂNG --

        1. Tạo mảng
        2. Xuất mảng
        3. Đảo mảng
        4. Sắp xếp mảng
        5. Tìm 1 số
        6. Thoát

Khi chọn 1: Gọi hàm tạo mảng gồm 10 phần tử là các số ngẫu nhiên từ 0 đến 100
Khi chọn 2: Gọi hàm xuất mảng
Khi chọn 3: Gọi hàm đảo các phần tử của mảng
Khi chọn 4: Gọi hàm sắp xếp các phần tử của mảng theo thứ tự tăng dần
Khi chọn 5: Gọi hàm nhập 1 số bất kỳ rồi tìm số đó trong mảng, nếu có thì in chỉ số của phần tử tìm thấy, nếu không thì in "Không tìm thấy"
Khi chọn 6: Thoát khỏi chương trình
 */


menu();


function menu() {
    var array = [];
    let selection;
    while (true) {
        selection = Number(prompt(` -- CHỌN CHỨC NĂNG --

            1. Tạo mảng
            2. Xuất mảng
            3. Đảo mảng
            4. Sắp xếp mảng
            5. Tìm 1 số
            6. Thoát
        
            Mời bạn chọn chức năng:`));

        switch (selection) {
            case 1:
                array = input(10);
                break;
            case 2:
                alert(`Mảng vừa tạo là : ${array.join(', ')}`);
                console.log(array);
                break;
            case 3:
                array = revertArray(array);
                break;
            case 4:
                bubbleSort(array);
                break;
            case 5:
                let inputNumber = Number(prompt(`Mời bạn nhập số muốn tìm trong mảng :`));
                alert(`Chỉ số của ${inputNumber} trong mảng là : ${findNumberIndex(inputNumber, array)}`);
                break;
            case 6:
                return;
            default:
                alert('Mời bạn nhập giá trị từ khoảng [1; 6]');
                break;
        }
    }
}



function input(size) {
    let value = [];

    for (let i = 0; i < size; i++) {
        value.push(Math.floor(Math.random() * 10));
    }

    return value;
}


function revertArray(array){
    let revertedArr = [];

    for(let i = array.length - 1; i >= 0; i --){
        revertedArr.push(array[i]);
    }

    return revertedArr;
}

function bubbleSort(array) {
    var size = array.length;

    for (var i = 0; i < size - 1; i++) {
        for (var j = 0; j < size - i - 1; j++) {

            if (array[j] > array[j + 1]) {

                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

function findNumberIndex (number , array){
    let foundIndex = [];

    for(let i = 0; i < array.length; i ++){
        if(array[i] === number){
            foundIndex.push(i);
        }
    }

    return foundIndex;
}