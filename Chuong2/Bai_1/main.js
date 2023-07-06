/**
 * 
 * Khai báo 3 biến chứa thông tin : Họ tên, tuổi, địa chỉ
In ra thông tin này sau 2 giây
Sử dụng comment để ghi chú những đoạn mã
 */



// Khai bao cac bien
var hoTen = 'Ung Dinh Chuong';
var tuoi = 22;
var diaChi = '97 Man Thien';

// In thong tin ra console.log
setTimeout(function(){
    console.log('Ho ten: ' + hoTen);
    console.log('Tuoi: ' + tuoi);
    console.log('Dia chi: ' + diaChi);
}, 2000);