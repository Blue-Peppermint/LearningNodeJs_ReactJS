/**
 * Bài 4: Chạy chương trình sau và ghi chép những gì đã học được
 */

// Hàm tạo số ngẫu nhiên trong khoảng 0 đến max-1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Hàm tìm chỉ số của một số trong mảng
function searchIndex(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) return i;
    }
    return -1;
}

// Hàm sắp xếp nổi bọt
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

// Hàm tìm một số trong mảng
function search(number, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == number) return array[i];
    }
}

var arrayNumber = [];

// Lặp để tạo mảng gồm 10 số ngẫu nhiên từ 0 đến 9
for (let i = 0; i < 10; i++) {
    arrayNumber.push(getRandomInt(10));
}
console.log(arrayNumber);

var input = prompt('Nhập số muốn tìm: ');

if (search(input, arrayNumber)) {
    console.log('Có tìm thấy số ' + input + ' trong mảng');
} else {
    console.log('Không tìm thấy!');
}

var idx = searchIndex(input, arrayNumber);
if (idx != -1) {
    console.log("Vị trí tìm thấy số " + input + " là: " + idx);
}

bubbleSort(arrayNumber);// gọi hàm sắp xếp mảng theo thứ tự tăng dần
console.log(arrayNumber);