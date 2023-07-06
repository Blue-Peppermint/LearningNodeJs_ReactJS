/**
 * Viết chương trình nhập 2 số a, b. Tính tích, thương, số dư của 2 số a, b.
 * 
*/


var a = prompt("Nhập số a: ");
var b = prompt("Nhập số b: ");

var tich = a * b;
var thuong = a / b;
var du = a % b;

console.log("Tích của a và b: " + tich);
console.log("Thương của a và b: " + thuong);
console.log("Số dư của a và b: " + du);

