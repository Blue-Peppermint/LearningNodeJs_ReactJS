/**
 * Viết chương trình giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp, làm tròn kết quả 2 số thập phân).
 * 
*/


var a = prompt("Nhập a: ");
var b = prompt("Nhập b: ");

if (a == 0 && b == 0) {
    console.log("Phương trình có vô số nghiệm");
} else if (a == 0 && b != 0) {
    console.log("Phương trình vô nghiệm");
} else {
    var ketQua = (-b / a).toFixed(2);
    console.log("Phuong trinh có nghiệm : " + ketQua);
}



