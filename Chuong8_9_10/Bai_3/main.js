/**
 * Bài tập 3: Cho danh sách các đội bóng tham dự World Cup như sau:
 * 
 * const danhSachDoiBong = [
    {
        id: 1,
        ten: 'Brazin',
        huanLuyenVien: 'Tite',
        soLanVoDich: 15
    },
    {
        id: 2,
        ten: 'Đức',
        huanLuyenVien: 'Hansi Flick',
        soLanVoDich: 10
    },
    {
        id: 3,
        ten: 'Pháp',
        huanLuyenVien: 'Deschamps',
        soLanVoDich: 12
    }
]

        Tạo menu như sau:
        1. Nhập dữ liệu
        2. Xuất dữ liệu
        3. Tìm thông tin
        4. Xóa thông tin đội bóng
        5. In những đội bóng có số lần vô địch lớn hơn 5
        6. Thoát


Khi chọn 1: Nhập đội bóng tham gia World Cup.
Khi chọn 2: Hiển thị thông tin các đội bóng đã nhập
Khi chọn 3: Nhập vào id và hiển thị thông tin đội bóng có id đó. Nếu không có thì thông báo "Không tìm thấy"
Khi chọn 4: Nhập vào id và xóa thông tin đội bóng có id đó. Nếu không có thì thông báo "Không tìm thấy đội bóng nào để xóa".
Khi chọn 5: In thông tin những đội bóng có số lần vô địch lớn hơn 5
Khi chọn 6: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"
 * 
 */

const danhSachDoiBong = [
    {
        id: 1,
        ten: 'Brazin',
        huanLuyenVien: 'Tite',
        soLanVoDich: 15
    },
    {
        id: 2,
        ten: 'Đức',
        huanLuyenVien: 'Hansi Flick',
        soLanVoDich: 10
    },
    {
        id: 3,
        ten: 'Pháp',
        huanLuyenVien: 'Deschamps',
        soLanVoDich: 12
    }
]


var currentId = danhSachDoiBong.length;


menu();



function menu() {

    do {

        let selection = Number(prompt(`
        == QUẢN LÝ ĐỘI BÓNG ==

            1. Nhập dữ liệu
            2. Xuất dữ liệu
            3. Tìm thông tin
            4. Xóa thông tin đội bóng
            5. In những đội bóng có số lần vô địch lớn hơn 5
            6. Thoát

        Mời Bạn Nhập Lựa Chọn :
    `));

        switch (selection) {
            case 1:
                nhapDoiBong(danhSachDoiBong);
                break;
            case 2:
                hienThiDsDoiBong(danhSachDoiBong);
                break;
            case 3:
                timDoiBongTheoId(danhSachDoiBong);
                break;
            case 4:
                xoaDoiBong(danhSachDoiBong);
                break;
            case 5:
                inDoiBongVoDichHon5Lan(danhSachDoiBong);
                break;
            case 6:
                alert('Goodbye!')
                return;
            default:
                alert(`Mời Bạn Nhập Lựa Chọn [1; 4] :`)
                break;
        }
    } while (true);

}

function hienThiDoiBong(doiBong){
    return `Id: ${doiBong.id}, Tên: ${doiBong.ten}, HLV :${doiBong.huanLuyenVien}, Vô Địch :${doiBong.soLanVoDich}`;
}

function hienThiDsDoiBong(danhSachDoiBong){
    var result = [];

    for(let i = 0 ; i < danhSachDoiBong.length; i++){
        result[i] = hienThiDoiBong(danhSachDoiBong[i]);
    }

    alert(result.join('\r\n'));
}

function nhapDoiBong(danhSachDoiBong){
     let ten = prompt('Nhập Tên Đội Bóng:');
     let hlv = prompt('Nhập Tên Huấn Luyện Viên:');
     let soLanVoDich = prompt('Nhập Số Lần Đội Bóng Vô Địch :');

     while(!isNumeric(soLanVoDich)){
        soLanVoDich = prompt('Nhập Số Lần Đội Bóng Vô Địch :');
    }

    soLanVoDich = Number(soLanVoDich);

     let doiBong = new DoiBong(ten, hlv, soLanVoDich);

     danhSachDoiBong.push(doiBong);
}

function timDoiBong (danhSachDoiBong, key, val){
    
    for(let i = 0; i < danhSachDoiBong.length; i ++){
        if(danhSachDoiBong[i][key] === val){
            return i;
        }
    }

    return -1;
}

function timDoiBongTheoId(danhSachDoiBong){
    let id = prompt('Nhập ID Của Đội Bóng Muốn Tìm');
    
    while(!isNumeric(id)){
        id = prompt('Mời Nhập ID Của Học Sinh Là 1 Con Số:');
    }

    id = Number(id);

    let foundIndex = timDoiBong(danhSachDoiBong, 'id', id );

    if(foundIndex === -1){
        alert("Không tìm thấy");
    }else{
        alert(hienThiDoiBong(danhSachDoiBong[foundIndex]));
    }
    
}

function xoaDoiBong(danhSachDoiBong){
    let id = prompt('Nhập ID Của Đội Bóng :');
    while(!isNumeric(id)){
        id = prompt('Mời Nhập ID Của Đội Bóng Là 1 Con Số:');
    }

    
    id = Number(id);
    let foundIndex = timDoiBong(danhSachDoiBong, 'id', id);

    if(foundIndex === -1){
        alert("Không tìm thấy đội bóng nào để xóa");
    }else{
        danhSachDoiBong.splice(foundIndex, 1);
    }
}

function inDoiBongVoDichHon5Lan(danhSachDoiBong){
    let dsDoiBongCanTim = [];

    for(let i = 0 ; i< danhSachDoiBong.length; i++){
        if(danhSachDoiBong[i].soLanVoDich >= 5){
            dsDoiBongCanTim.push(danhSachDoiBong[i]);
        }
    }

    hienThiDsDoiBong(dsDoiBongCanTim);
}

function DoiBong (ten, huanLuyenVien, soLanVoDich){
    this.id = ++ currentId;
    this.ten = ten;
    this.huanLuyenVien = huanLuyenVien;
    this.soLanVoDich = soLanVoDich;
}

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

