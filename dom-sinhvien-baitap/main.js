const students = [
    {
        id: '1',
        name: "Dinh",
        address: "hue"
    },
    {
        id: '2',
        name: "Nam",
        address: "quang nam"
    },
    // {
    //     id: '3',
    //     name: "Tan",
    //     address: "da nang"
    // },
    // {
    //     id: '4',
    //     name: "Hung",
    //     address: "hue"
    // },
    // {
    //     id: '5',
    //     name: "Tri",
    //     address: "quang tri"
    // },
    // {
    //     id: '6',
    //     name: "Anh",
    //     address: "hue"
    // },
    // {
    //     id: '7',
    //     name: "Binh",
    //     address: "da nang"
    // }
];


var currentID = students.length;
var currentUpdateStudentIndex = -1;


const createBtn = document.querySelector('#create');
const updateBtn = document.querySelector('#update');
const nameInput = document.querySelector('input[name="name"]');
const addressInput = document.querySelector('input[name="address"]');
const nameMsg = nameInput.nextElementSibling.nextElementSibling;
const addressMsg = addressInput.nextElementSibling.nextElementSibling;

const listStudentEle = document.querySelector('#list-students');

listStudentEle.previousElementSibling.insertAdjacentHTML('afterend', '<div id="error"></div>');

const errorMsg = document.querySelector('#error');

Object.assign(errorMsg.style, {
    color: 'red',
    textAlign: 'center',
    fontSize: 'larger',
    fontWeight: 'bold'
});


nameMsg.setAttribute("style", "color:red");
addressMsg.setAttribute("style", "color:red");

showStudentList(students);



function showStudentList(students) {
    let studentEles = students.map((student, studentIndex) => {
        return `
        <li>
        <h2><bold>Name: ${student.name}</bold></h2>
        <span>Address: ${student.address} </span>
        <br>
        <br>
        <input id="${student.id}" name="btnSua" type="button" value="Sửa">
        <input id="${student.id}" name ="btnXoa" type="button" value="Xóa">
        </li>
        `
    }).join('\r\n');

    listStudentEle.innerHTML = studentEles;
}

createBtn.onclick = () => {
    if(confirm('Bạn Có Chắc Là Muốn Thêm Không ?')){

        errorMsg.innerHTML = '';
        nameMsg.innerText = '';
        addressMsg.innerText = '';
    
        if (nameInput.value.trim().length === 0 || addressInput.value.trim().length === 0) {
            if(nameInput.value.trim().length === 0){
                nameMsg.innerText = 'Vui lòng nhập tên học sinh';
            }
            if(addressInput.value.trim().length === 0)
            {
                addressMsg.innerText = 'Vui lòng nhập địa chỉ của học sinh';
            }
    
            errorMsg.innerHTML = 'Vui Lòng Nhập Đầy Đủ Tên & Địa Chỉ';
        } else {
            let newStudent = new Student(nameInput.value, addressInput.value);
            students.push(newStudent);
            showStudentList(students);
            console.log(newStudent);
        }
    }
}

document.addEventListener('click', function (event) {
    errorMsg.innerHTML = '';
    nameMsg.innerText = '';
    addressMsg.innerText = '';

    if (event.target.matches('input[name="btnSua"]')) {
        editStudent(event.target.id);
    } else if (event.target.matches('input[name="btnXoa"]')) {
        if(confirm('Bạn Có Chắc Là Muốn Xóa Không ?')){
            deleteStudent(event.target.id);
        }
    }
});

updateBtn.onclick = () =>{
    if(confirm('Bạn Có Chắc Là Muốn Sửa Không ?') && currentUpdateStudentIndex !== -1){
            students[currentUpdateStudentIndex].name = nameInput.value;
            students[currentUpdateStudentIndex].address = addressInput.value;
            errorMsg.innerHTML = 'Cập Nhật Học Sinh Thành Công';
            showStudentList(students);
    
            createBtn.style.display = '';
            updateBtn.style.display = 'none';
    
            currentUpdateStudentIndex = -1;
    }
}


function editStudent(studentID) {
    console.log(studentID);

    let studentIndex = students.findIndex((student) => {
        return student.id === studentID;
    });

    if(studentIndex !== -1){
        createBtn.style.display = 'none';
        updateBtn.style.display = '';

        currentUpdateStudentIndex = studentIndex;
        nameInput.value = students[studentIndex].name;
        addressInput.value = students[studentIndex].address;
    }
}


function deleteStudent(studentID) {
    console.log(studentID);

    let studentIndex = students.findIndex((student) => {
        return student.id === studentID;
    });

    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
        showStudentList(students);
    }

}

function Student(name, address) {
    this.id = String(++currentID);
    this.name = name;
    this.address = address;
}