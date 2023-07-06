/**
 * Viết chương trình nhập vào 1 số rồi kiểm tra xem đó là số chẵn hay số lẻ.
 * 
*/


var number = prompt("Nhập 1 số: ");

if (number % 2 == 0) {
    console.log(number + ' là số chắn');
} else {
    console.log(number + ' là số lẻ');
}



