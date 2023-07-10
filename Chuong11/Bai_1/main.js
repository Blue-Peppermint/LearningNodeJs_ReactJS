/**
 * Bài 1: Cho mảng sinh viên gồm các thông tin sau:
 * 
 * 
 * var students = [
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


Thêm các thuộc tính điểm Toán, điểm Lý, điểm Hóa để lưu thông tin điểm thi cho các sinh viên là các số ngẫu nhiên từ 0 đến 10
Hiển thị các sinh viên trong danh sách như sau: (Dùng forEach và map rồi so sánh 2 cách)

 */


var students = [
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

const headerLog = '=== DANH SÁCH SINH VIÊN ===';
const splitLog =  '===========================';


// forEachGenerateRandomScores(students);
// forEachLog(students);

mapLog(mapGenerateScores(students));


function forEachGenerateRandomScores(students) {
    students.forEach((student)=>{
        student.toan = getRandomNumb(0,10);
        student.ly = getRandomNumb(0,10);
        student.hoa = getRandomNumb(0,10);
    });
}

function mapGenerateScores(students){
    let newStudents = students.map((student)=>{
        student.toan = getRandomNumb(0,10);
        student.ly = getRandomNumb(0,10);
        student.hoa = getRandomNumb(0,10);
        return student;
    });

    return newStudents;
}

function forEachLog(students){
    console.log(headerLog);

    students.forEach((student, index, students) => {

        console.log(getStudentInfo(student));

        if(index !== students.length - 1){
            console.log(splitLog);
        }
    });
}

function mapLog(students){
    console.log(headerLog);

    students.map((student,index, students)=>{
        console.log(getStudentInfo(student));

        if(index !== students.length - 1){
            console.log(splitLog);
        }
    });
}


function getRandomNumb(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getStudentInfo(student){
    return `    id: ${student.id}
    name: ${student.name}
    address: ${student.address}
    toan : ${student.toan}
    ly : ${student.ly}
    hoa : ${student.hoa}`;
}