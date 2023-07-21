const students = [
    {
        id: '1',
        name: 'Nguyen Van Teo',
        classId: '1'
    },
    {
        id: '2',
        name: 'Nguyen Van Ti',
        classId: '2'
    },
    {
        id: '3',
        name: 'Tran Van Tun',
        classId: '3'
    },
    {
        id: '4',
        name: 'Nguyen Thi Heo',
        classId: '1'
    },
    {
        id: '5',
        name: 'Le Thi Be',
        classId: '1'
    }
]

const classList = [
    {
        id: '1',
        name: "CNTT"
    },
    {
        id: '2',
        name: 'DTVT'
    },
    {
        id: '3',
        name: 'THXD'
    },
    {
        id: '4',
        name: 'XDDD'
    }
]
const table = document.querySelector('#tbl');
let editingRow = null;


table.innerHTML = `
<thead>
  <tr>
    <th>Tên sinh viên</th>
    <th>Lớp</th>
    <th>Chức năng</th>
  </tr>
</thead>
<tbody>
  ${students.map(student => `
    <tr>
      <td>${student.name}</td>
      <td>${classList.find(cls => cls.id === student.classId).name}</td>
      <td>
        <button value="${student.id}" name="edit">Sửa</button>
        <button value="${student.id}" name="delete">Xóa</button>
      </td>
    </tr>
  `).join('')}
</tbody>`;


const classSelect = document.querySelector('#class');
classSelect.innerHTML = classList.map(cls => `<option value="${cls.id}">${cls.name}</option>`).join('');


const nameMessage = document.querySelector('input[name="name"]').nextElementSibling;
const classMessage = document.querySelector('#class').nextElementSibling;
const studentNameInput = document.querySelector('input[name="name"]');
const createButton = document.querySelector('#create');
const updateButton = document.querySelector('#update');

createButton.addEventListener('click', event => {
    event.preventDefault(); 
    const name = studentNameInput.value;
    const classId = classSelect.value;
    if (name && classId) {
        const confirmation = confirm("Bạn có muốn thêm sinh viên mới không?");
        if (confirmation) {
            const newId = (Math.max(...students.map(s => parseInt(s.id))) + 1).toString();
            const newStudent = { id: newId, name, classId };
            students.push(newStudent);
            table.querySelector('tbody').innerHTML += `
                <tr>
                  <td>${newStudent.name}</td>
                  <td>${classList.find(cls => cls.id === newStudent.classId).name}</td>
                  <td>
                    <button value="${newStudent.id}" name="edit">Sửa</button>
                    <button value="${newStudent.id}" name="delete">Xóa</button>
                  </td>
                </tr>`;
            studentNameInput.value = ""; 
            classSelect.selectedIndex = 0; 
            console.log(students); 
        }
    } else {
        // if (!name) {
        //     nameMessage.textContent = 'Nhập tên sinh viên';
        //     nameMessage.className = 'form-message error';
        // }
        // if (!classId) {
        //     classMessage.textContent = 'Chọn lớp';
        //     classMessage.className = 'form-message error';
        // }
        console.log("Nhập vào"); 
    }
});

updateButton.addEventListener('click', event => {
    event.preventDefault(); 
    const name = studentNameInput.value;
    const classId = classSelect.value;
    if (name && classId && editingRow) {
        const confirmation = confirm("Bạn có chắc sửa thông tin sinh viên này không?");
        if (confirmation) {
            const studentId = editingRow.querySelector('button[name="edit"]').value;
            const student = students.find(s => s.id === studentId);
            student.name = name;
            student.classId = classId;
            editingRow.children[0].textContent = name;
            editingRow.children[1].textContent = classList.find(cls => cls.id === classId).name;
            studentNameInput.value = ""; 
            classSelect.selectedIndex = 0; 
            console.log(students); 
            createButton.style.display = 'inline-block';
            updateButton.style.display = 'none';
        }
    } else {
        // if (!name) {
        //     nameMessage.textContent = 'Nhập tên sinh viên';
        //     nameMessage.className = 'form-message error';
        // }
        // if (!classId) {
        //     classMessage.textContent = 'Chọn lớp';
        //     classMessage.className = 'form-message error';
        // }
        console.log("Nhập vào"); 
    }
});

table.querySelector('tbody').addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;
        const studentId = button.value;
        const row = button.closest('tr');
        if (button.name === 'edit') {
            editingRow = row;
            createButton.style.display = 'none';
            updateButton.style.display = 'inline-block';
            const student = students.find(s => s.id === studentId);
            studentNameInput.value = student.name;
            classSelect.value = student.classId;
        } else if (button.name === 'delete') {
            const confirmation = confirm("Bạn có chắc xóa sinh viên này không?");
            if (confirmation) {
                row.remove();
                const index = students.findIndex(s => s.id === studentId);
                students.splice(index, 1);
                console.log(students); 
                createButton.style.display = 'inline-block';
                updateButton.style.display = 'none';
                studentNameInput.value = ""; 
                classSelect.selectedIndex = 0; 
            }
        }
    }
});
