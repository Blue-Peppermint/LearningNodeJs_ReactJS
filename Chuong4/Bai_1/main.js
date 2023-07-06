/**
 * Bài 1: Viết chương trình (có sử dụng hàm) giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp).
 */



var a = prompt("Nhập a: ");
var b = prompt("Nhập b: ");

function giaiPTBac1(a, b) {
    if (a == 0 && b == 0) {
       return "Phương trình có vô số nghiệm";
    } else if (a == 0 && b != 0) {
        return "Phương trình vô nghiệm";
    } else {
        var ketQua = (-b / a).toFixed(2);
        return "Phuong trình có nghiệm : " + ketQua;
    }
}


console.log(giaiPTBac1(a,b));

