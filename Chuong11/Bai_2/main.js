/**
 * 
 * const students = [
    {
        id: 1,
        name: "Dinh",
        toan: 5,
        ly: 6,
        hoa: 7
    },
    {
        id: 2,
        name: "Nam",
        toan: 10,
        ly: 8,
        hoa: 5,
    },
    {
        id: 3,
        name: "Tan",
        toan: 3,
        ly: 5,
        hoa: 5,
    },
    {
        id: 4,
        name: "Hung",
        toan: 9,
        ly: 7,
        hoa: 7,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 9,
    },
    {
        id: 7,
        name: "Binh",
        toan: 3,
        ly: 6,
        hoa: 9,
    }
];


Tạo menu như sau: 
        === QUẢN LÝ SINH VIÊN ===

            1. kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
            2. kiểm tra xem có sinh viên nào xếp loại giỏi không?
            3. Lọc ra các sinh viên xếp loại giỏi
            4. Tìm 1 sinh viên xếp loại giỏi
            5. Cộng cho mỗi sinh viên 1 điểm toán
            6. Thêm thuộc tính tổng điểm 3 môn
            7. Tính tổng điểm của tất cả các sinh viên
            8. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
            9. Thoát


Khi chọn 1: Duyệt mảng và kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
Khi chọn 2: Duyệt mảng và kiểm tra xem có sinh viên nào xếp loại giỏi không?
Khi chọn 3: Lọc ra các sinh viên xếp loại giỏi và in ra
Khi chọn 4: Tìm 1 sinh viên xếp loại giỏi và hiển thị
Khi chọn 5: Cộng cho mỗi sinh viên 1 điểm toán
Khi chọn 6: Thêm thuộc tính sum để lưu tổng điểm 3 môn
Khi chọn 7: Tính tổng điểm của tất cả các sinh viên
Khi chọn 8: Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
Khi chọn 9: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"
 */


const students = [
    {
        id: 1,
        name: "Dinh",
        toan: 5,
        ly: 6,
        hoa: 7
    },
    {
        id: 2,
        name: "Nam",
        toan: 10,
        ly: 8,
        hoa: 5,
    },
    {
        id: 3,
        name: "Tan",
        toan: 3,
        ly: 5,
        hoa: 5,
    },
    {
        id: 4,
        name: "Hung",
        toan: 9,
        ly: 7,
        hoa: 7,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 9,
    },
    {
        id: 7,
        name: "Binh",
        toan: 3,
        ly: 6,
        hoa: 9,
    }
];

const passMark = 6.0;
const excellentAvgMark = 8.0;


menu();



function menu() {

    do {

        let selection = Number(prompt(`
        === QUẢN LÝ SINH VIÊN ===

            1. kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không?
            2. kiểm tra xem có sinh viên nào xếp loại giỏi không?
            3. Lọc ra các sinh viên xếp loại giỏi
            4. Tìm 1 sinh viên xếp loại giỏi
            5. Cộng cho mỗi sinh viên 1 điểm toán
            6. Thêm thuộc tính tổng điểm 3 môn
            7. Tính tổng điểm của tất cả các sinh viên
            8. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
            9. Thoát

        Mời Bạn Nhập Lựa Chọn :
    `));

        switch (selection) {
            case 1:
                if (students.every((student) => { return checkStudentMarkHigherThanAvg(student) })) {
                    alert('Tất Cả Sinh Viên Đều Có Các Cột Điểm Trên Trung Bình');
                } else {
                    alert('Không Phải Tất Cả Sinh Viên Đều Có Các Cột Điểm Trên Trung Bình');
                }
                break;
            case 2:
                if (students.some(student => getAvgGrade(student) >= excellentAvgMark)) {

                    alert('Có Một Vài Sinh Viên Nào Xếp Loại Giỏi');
                } else {
                    alert('Không Có Sinh Viên Nào Xếp Loại Giỏi Cả');
                }

                break;
            case 3:
                let excellentStudents = getExcellentStudents(students);
                if (excellentStudents.length === 0) {
                    alert('Không Có Sinh Viên Nào Xếp Loại Giỏi Cả');
                } else {
                    alert(`Chỉ Có ${excellentStudents.map((student) => {
                        return student.name;
                    }).join(', ')} Là Có Được Xếp Loại Giỏi`);
                }

                break;
            case 4:
                excellentStudents = getExcellentStudents(students);
                if (excellentStudents.length === 0) {
                    alert('Không Có Sinh Viên Nào Xếp Loại Giỏi Cả');
                } else {
                    alert(`${excellentStudents[0].name} Được Xếp Loại Giỏi`);
                }

                break;
            case 5:
                AddMarkForSubject(students, 'toan', 1);
                break;
            case 6:
                addSumMarkForStudents(students);
                break;
            case 7:
                alert(`Tổng Điểm Của Tất Cả Sinh Viên Là : ${calAllSumMark(students)}`);
                break;
            case 8:
                sortStudentsBySumMark(students);
                break;
            case 9:
                alert('Goodbye!')
                return;
            case 10:
                console.log(students);
                break;
            default:
                alert(`Mời Bạn Nhập Lựa Chọn [1; 9] :`)
                break;
        }
    } while (true);

}


function getStudentsMarkHigherThanAvg(students) {
    let studentsGradeHigherThanAvg = students.filter((student) => {
        return checkStudentMarkHigherThanAvg(student);
    });

    return studentsGradeHigherThanAvg;
}

function checkStudentMarkHigherThanAvg(student) {
    return student.toan >= passMark && student.ly >= passMark && student.hoa >= passMark;
}


function getExcellentStudents(students) {
    let excellentStudents = students.filter((student) => {
        return getAvgGrade(student) >= excellentAvgMark;
    });

    return excellentStudents;
}

function AddMarkForSubject(students, subject, addMark) {
    students.forEach((student) => {
        student[subject] += addMark;
    });
}

function addSumMarkForStudents(students) {
    students.forEach((student) => {
        student.sum = calSumMark(student);
    })
}

function calAllSumMark(students) {
    return students.reduce((total, student) => {
        return total + calSumMark(student);
    }, 0);
}

function sortStudentsBySumMark(students) {
    addSumMarkForStudents(students);

    return students.sort((student1, student2) => {
        return student1.sum - student2.sum;
    });
}

function calSumMark(student) {
    return student.toan + student.ly + student.hoa;
}

function getAvgGrade(student) {
    return (student.toan + student.ly + student.hoa) / 3.0;
}
