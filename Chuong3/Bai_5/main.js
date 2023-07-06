/**
 * Viết chương trình nhập bán kính R của hình tròn. Tính chu vi và diện tích của hình tròn đó.
 * 
*/



var banKinh = Number(prompt('Nhập bán kính hình tròn :'));
var pi = 3.14;

var perimeter = (2 * banKinh)  * pi;
var area = (2 ** banKinh)  * pi;

console.log(`Chu vi của hình tròn : ${perimeter }`);
console.log(`Diện tích của hình tròn : ${area }`);



