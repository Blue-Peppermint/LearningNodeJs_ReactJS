const studentsApi = "http://localhost:3001/students";
const classListApi = "http://localhost:3001/classList";
const tableHeader = `
<thead>
  <tr>
    <th>Tên sinh viên</th>
    <th>Lớp</th>
    <th>Chức năng</th>
  </tr>
</thead>
`;
const defaultClassOption = `<option value="" disabled selected>-- Chọn Lớp --</option>;`;

// declare elements
const table = $('#tbl');
const classSelect = $('#class');
const studentNameInput = $('input[name="name"]');
const createButton = $('#create');
const updateButton = $('#update');

var editingRow = null;

renderTableStudents();
renderSelectClassList();

// event for btn 'Thêm'
createButton.click(async (event) => {
  event.preventDefault();
  let validFlg = true;

  if (!validateInput(studentNameInput)) {
    validFlg = false;
  }

  if (!validateInput(classSelect)) {
    validFlg = false;
  }

  if (!validFlg) {
    return;
  }

  if (confirm("Bạn có muốn thêm sinh viên mới không?")) {
    let students = await getStudents();

    let classList = await getClasslist();

    const newId = (Math.max(...students.map(s => parseInt(s.id))) + 1).toString();
    const name = studentNameInput.val().trim();
    const classId = classSelect.val();
    const newStudent = { id: newId, name, classId };


    var result = await axios({
      method: "POST",
      url: studentsApi,
      data: newStudent,
      headers: { "Content-Type": "application/json" },
    })

    table.html(table.html() + renderStudent(result.data, classList));

    studentNameInput.value = "";
    classSelect.selectedIndex = 0;
  }
});

/**
 * Code below doens't work because:
 * If your button elements with the name attribute set to "edit" are created 
 * dynamically using the html method in jQuery, you need to make sure 
 * that you attach the click event handler after the elements have been 
 * added to the page.
 *  */
// $('button[name="edit"]').click(async (e) => {
//   const button = e.target;
//   const studentId = button.value;
//   const row = button.closest('tr');
//   editingRow = row;
//   createButton.attr('style', 'display :none');
//   updateButton.style.display = 'inline-block';
//   let students = await axios(studentsApi);
//   students = students.data;
//   const student = students.find(s => s.id === studentId);
//   studentNameInput.val(student.name);
//   classSelect.val(student.classId);
// }
// );

// console.log($('button[name="edit"]'))

// add event for all button[name="edit"]'
$(document).on('click', 'button[name="edit"]', async function (e) {
  const button = e.target;
  const studentId = button.value;

  createButton.attr('style', 'display :none');
  updateButton.attr('style', 'inline-block');

  let students = await getStudents();

  const student = students.find(s => s.id === studentId);
  studentNameInput.val(student.name);
  classSelect.val(student.classId);
  const row = button.closest('tr');
  editingRow = row;

  validateInput(studentNameInput);
  validateInput(classSelect);
});

// add event for all button[name="delete"]'
$(document).on('click', 'button[name="delete"]', async function (e) {
  const button = e.target;
  const row = button.closest('tr');

  if (confirm("Bạn có chắc xóa sinh viên này không?")) {
    const studentId = row.querySelector('button[name="edit"]').value;
    await axios({
      method: "DELETE",
      url: studentsApi + "/" + studentId,
      headers: { "Content-Type": "application/json" }
    });
    studentNameInput.val('');
    classSelect.val(0);
    row.remove();
  }

  $('.form-message').attr('style', 'display:none; ');
});



// add event for  <button id="update">Sửa</button>
updateButton.click(async (e) => {
  e.preventDefault();
  let validFlg = true;

  if (!validateInput(studentNameInput)) {
    validFlg = false;
  }

  if (!validateInput(classSelect)) {
    validFlg = false;
  }

  if (!validFlg) {
    return;
  }

  if (confirm("Bạn có chắc sửa thông tin sinh viên này không?")) {

    const studentId = editingRow.querySelector('button[name="edit"]').value;
    let students = await getStudents();
    const student = students.find(s => s.id === studentId);
    student.name = studentNameInput.val();
    student.classId = classSelect.val();

    var result = await axios({
      method: "PUT",
      url: studentsApi + "/" + studentId,
      data: student,
      headers: { "Content-Type": "application/json" }
    });

    result = result?.data;

    editingRow.children[0].textContent = result.name;
    editingRow.children[1].textContent = classList.find(cls => cls.id === result.classId).name;

    studentNameInput.val('');
    classSelect.val(0);

    createButton.attr('style', 'display :inline-block');
    updateButton.attr('style', 'display :none');
  }
});

async function getStudents() {
  let students = await axios(studentsApi);
  return students?.data;
}

async function getClasslist() {
  let classlist = await axios(classListApi);
  return classlist?.data;
}


async function renderTableStudents() {
  let students = await getStudents();

  let classList = await getClasslist();

  let studentsHTML = students.map(student => {
    return renderStudent(student, classList);
  }).join('');

  let tableBody = `<tbody>${studentsHTML}</tbody>`;
  let tableContent = tableHeader + tableBody;

  table.html(`${tableContent}`);
}

function renderStudent(student, classList) {
  return `
  <tr>
    <td>${student.name}</td>
    <td>${classList.find(cls => cls.id === student.classId).name}</td>
    <td>
      <button value="${student.id}" name="edit">Sửa</button>
      <button value="${student.id}" name="delete">Xóa</button>
    </td>
  </tr>`;
}


async function renderSelectClassList() {
  let classList = await getClasslist();
  classSelect.html(defaultClassOption + classList.map(cls => `<option value="${cls.id}">${cls.name}</option>`).join(''));
}


// validate all input elements
function validateInput(inputEle) {
  let formMessage = inputEle.parent().children()[3];

  if (inputEle.val() === null || inputEle.val()?.trim().length === 0) {

    Object.assign(formMessage.style, {
      display: 'block',
      color: 'red',
      fontStyle: 'italic'
    });

    if (inputEle.prop('tagName') === 'INPUT') {
      $(formMessage).text('Nhập tên sinh viên');
    } else {
      $(formMessage).text('Chọn lớp');
    }

    return false;
  } else {
    $(formMessage).attr('style', 'display:none; ');
    return true;
  }
}
