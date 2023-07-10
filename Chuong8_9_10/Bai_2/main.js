/**
 * Bài tập 2: Cho mảng sinh viên gồm các thông tin như sau:
 * 
 * const students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];



Tạo menu chương trình như sau:
        == QUẢN LÝ SINH VIÊN ==

        1. Xem danh sách sinh viên
        2. Thêm sinh viên
        3. Sửa sinh viên
        4. Xóa sinh viên
        
Khi chọn 1: Hiện thị tất cả sinh viên trong danh sách.
Khi chọn 2: Nhập mới 1 sinh viên và thêm vào danh sách.
Khi chọn 3: Sửa 1 sinh viên trong danh sách theo id nhập vào.
Khi chọn 4: Xóa 1 sinh viên trong danh sách theo id nhập vào.
 * 
 * 
 */
const students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];

var currentId = students.length;


menu();



function menu() {

    let myDic = [];



    do {

        let selection = Number(prompt(`
        == QUẢN LÝ SINH VIÊN ==

            1. Xem danh sách sinh viên
            2. Thêm sinh viên
            3. Sửa sinh viên
            4. Xóa sinh viên

        Mời Bạn Nhập Lựa Chọn :
    `));

        switch (selection) {
            case 1:
                outputStudens(students);
                break;
            case 2:
                addStudent(students);
                break;
            case 3:
                editStudentInfo(students);
                break;
            case 4:
                deleteStudentInfo(students);
                break;
            default:
                alert(`Mời Bạn Nhập Lựa Chọn [1; 4] :`)
                break;
        }
    } while (true);

}

function outputStudens(studentList){
    var result = [];

    for(let i = 0 ; i < studentList.length; i++){
        result[i] = `id: ${studentList[i].id}, name: ${studentList[i].name}, address :${studentList[i].address}`;
    }

    alert(result.join('\r\n'));
}

function addStudent(studentList){
     let name = prompt('Nhập Tên Học Sinh:');
     let address = prompt('Nhập Địa Chỉ Học Sinh:');

     let student = new Student(name, address);

     studentList.push(student);
}

function editStudentInfo(studentList){

    let id = prompt('Nhập ID Của Học Sinh :');
    while(!isNumeric(id)){
        id = prompt('Mời Nhập ID Của Học Sinh Là 1 Con Số:');
    }

    
    id = Number(id);
    let foundIndex = -1;
    for(let i = 0 ; i < studentList.length; i ++){
        if(studentList[i].id === id){
            foundIndex = i;
            break;
        }
    }

    if(foundIndex === -1){
        alert('Không Tìm Thấy Học Sinh');
    }else{
        let name = prompt('Mời Nhập Tên Của Học Sinh :');
        let address = prompt('Mời Nhập Địa Chỉ Học Sinh:');

        studentList[foundIndex].name = name;
        studentList[foundIndex].address = address;
    }
}

function deleteStudentInfo(studentList){
    let id = prompt('Nhập ID Của Học Sinh :');
    while(!isNumeric(id)){
        id = prompt('Mời Nhập ID Của Học Sinh Là 1 Con Số:');
    }

    
    id = Number(id);
    let foundIndex = -1;
    for(let i = 0 ; i < studentList.length; i ++){
        if(studentList[i].id === id){
            foundIndex = i;
            break;
        }
    }

    if(foundIndex === -1){
        alert('Không Tìm Thấy Học Sinh');
    }else{

        studentList.splice(foundIndex, 1);
    }
}

function Student (name, address){
    this.id = ++ currentId;
    this.name = name;
    this.address = address;
}

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

