/**
 * Bài 3: Tạo menu như sau:
 * 
 * == GIẢI PHƯƠNG TRÌNH ==

        1. BẬC 1
        2. BẬC 2
        3. THOÁT


Khi chọn 1: Gọi hàm giải phương trình bậc 1
Khi chọn 2: Gọi hàm giải phương trình bậc 2
Khi chọn 3: Thoát khỏi chương trình và in ra dòng chữ "Good Bye!"
 */


console.log(menu());

function menu() {
    while (true) {

        var choice = prompt(`
        == GIẢI PHƯƠNG TRÌNH ==
    
            1. BẬC 1
            2. BẬC 2
            3. THOÁT
        
        Xin mời bạn chọn :`);
    
        choice = Number(choice);

        let a;
        let b;
        let c;

        switch (choice) {
            case 1:
                a = prompt("Nhập a: ");
                b = prompt("Nhập b: ");
                console.log(giaiPTBac1(a, b));
                break;
            case 2:
                a = prompt("Nhập a: ");
                b = prompt("Nhập b: ");
                c = prompt("Nhập c: ");
                console.log(giaiPTBac2(a, b, c));
                break;
            case 3:
                return `Good Bye!`;
            default:
                break;

        }
    }

}



function giaiPTBac2(a, b, c) {
    if (a == 0) {
        return giaiPTBac1(b, c);
    }

    var delta = b ** 2 - 4 * a * c;

    if (delta < 0) {
        return 'phương trình vô nghiệm';
    } else if (delta == 0) {
        return `phương trình có nghiệm kép x1 = x2 = ${-b / (2 * a)}`;
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);

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


