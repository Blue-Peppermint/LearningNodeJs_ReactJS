/**
 * Viết chương trình nhập chiều dài a, chiều rộng b của hình chữ nhật. Tính chu vi và diện tích của hình chữ nhật đó.
 * 
*/


var cDai = Number(prompt('Nhập Chiều Dài HCN :'));
var cRong = Number(prompt('Nhập Chiều Rộng HCN :'));

var chuVi = (cDai + cRong) * 2;
var dienTich = cDai * cRong;

console.log(' Chu vi của hình chữ nhật :' + chuVi);
console.log(' Diện tích của hình chữ nhật :' + dienTich);