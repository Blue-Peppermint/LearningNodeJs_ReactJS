/**
 * Viết chương trình nhập đáy trên a, đáy dưới b và chiều cao h của một hình thang. Tính diện tích của hình thang này.
 * 
*/



var dayTren = Number(prompt('Nhập đáy trên a :'));
var dayDuoi = Number(prompt('Nhập đáy dưới b :'));
var chieuCao = Number(prompt('Nhập chiều cao h :'));

// diện tích của hình thang S = (a + b)/2 x h
var dienTichHinhThang = (dayTren + dayDuoi)/2 * chieuCao;

console.log(`Diện tích của hình thang : (${dayTren } + ${dayDuoi} )/ 2 * ${chieuCao} = ` +  dienTichHinhThang);



