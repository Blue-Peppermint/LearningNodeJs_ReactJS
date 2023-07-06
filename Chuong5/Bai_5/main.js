/**
 * Bài 5: Cho 1 mảng
 * 
var arrNumber = ['111', '222', '333', '444']

1. Kiểm tra xem mảng có phần tử nào có giá trị bằng 222 không? Nếu có thì xoá nó đi
2. Nếu mảng có phần tử có kiểu và giá trị bằng 444 thì thay thế phần tử đó thành '555'
3. Đổi tất cả phần tử trong mảng ra kiểu số, in mảng đó ra màn hình
 */


var arrNumber = ['111', '222', '333', '444'];

if(arrNumber.indexOf('222') !== -1){
    arrNumber.splice(arrNumber.indexOf('222'), 1);
}


if(arrNumber.indexOf('444') !== -1){
    arrNumber[arrNumber.indexOf('444')] = '555';
}

for(let i = 0; i < arrNumber.length; i++){
    arrNumber[i] = Number(arrNumber[i]);
}

console.log(arrNumber);

