/**
 * Bài 2: Viết chương trình (có sử dụng hàm) giải phương trình bậc 2: ax^2 + bx + c = 0 (xét tất cả các trường hợp).
 */

// import { giaiPTBac1 } from "../Bai_1/main";

var a = prompt("Nhập a: ");
var b = prompt("Nhập b: ");
var c = prompt("Nhập c: ");

function giaiPT(a, b, c ) {
    if(a == 0){
        return giaiPTBac1(b,c);
    }

    var delta = b**2 - 4*a*c;
       
    if(delta < 0){
        return 'phương trình vô nghiệm';
    }else if (delta == 0){
        return `phương trình có nghiệm kép x1 = x2 = ${-b/(2*a)}`;
    }else{
        var x1 = (-b + Math.sqrt(delta))/ (2*a);
        var x2 = (-b - Math.sqrt(delta))/ (2*a);

        return `phương trình có nghiệm : x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    }
}


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


console.log(giaiPT(a,b,c));

