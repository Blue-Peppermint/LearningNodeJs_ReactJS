/**
 * Viết chương trình nhập 2 số a, b. Tính tổng và hiệu của 2 số đó rồi in kết quả ra màn hình.
 */


var a = prompt('Nhập số a :');
var b = prompt('Nhập số b :');

var tong = Number(a) + Number(b);
var hieu =  Number(a) - Number(b);

console.log('a + b = ' + tong );
console.log('a - b = ' + hieu );