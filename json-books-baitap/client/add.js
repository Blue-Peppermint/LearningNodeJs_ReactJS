
const booksApi = "http://localhost:3001/books";


const form = $('form');
const bookID = $('input[name="id"]');
const title = $('input[name="title"]');
const description = $('textarea[name="description"]');
const detail = $('textarea[name="detail"]');
const statusSelect = $('select[name="status"]');
const addBtn = $('input[type="submit"]');

initMsgs();

form.on('submit', async function (event) {
  event.preventDefault();
  resetMsgs();

  if (validateInputs() && confirm("Bạn có muốn thêm thông tin sách này không?")) {
    let newBook = {
      id: await getMaxBookID()
      , title: $(title).val().trim()
      , description: $(description).val().trim()
      , detail: $(detail).val().trim()
      , status: $(statusSelect).val() === 'true' ? '1' : '0'
    }

    try {
      let response = await axios({
        method: "POST",
        url: booksApi,
        data: newBook,
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        $(bookID).next().attr('style', 'font-weight: bold; color: green; font-size: 1.17em;');
        $(bookID).next().text(`THÊM SÁCH THÀNH CÔNG VỚI ID :${newBook.id}`);
      } else {
        $(bookID).next().attr('style', 'font-weight: bold; color: red; font-size: 1.17em;');
        $(bookID).next().text('THÊM SÁCH THẤT BẠI');
        console.log('An error occurred:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
});

// addBtn.click(async (e) => {
//   e.preventDefault();
//   resetMsgs();

//   if (validateInputs()) {
//     let newBook = {
//       id: await getMaxBookID()
//       , title: $(title).val()
//       , description: $(description).val()
//       , detail: $(detail).val()
//       , status: $(statusSelect).val()
//     }

//     try {
//       let response = await axios({
//         method: "POST",
//         url: booksApi,
//         data: newBook,
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.status === 201) {
//         $(bookID).next().attr('style', 'font-weight: bold; color: green; font-size: 1.17em;');
//         $(bookID).next().text('THÊM SÁCH THÀNH CÔNG');
//       } else {
//         $(bookID).next().attr('style', 'font-weight: bold; color: red; font-size: 1.17em;');
//         $(bookID).next().text('THÊM SÁCH THẤT BẠI');
//         console.log('An error occurred:', response.status, response.statusText);
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }
// });

async function getMaxBookID() {
  let books = await getBooks();
  return (Math.max(...books.map(book => parseInt(book.id))) + 1).toString();
}

function initMsgs() {
  bookID.parent().append('<span class="form-message" ></span>');
  title.parent().append('<span class="form-message"></span>');
  description.parent().append('<span class="form-message"></span>');
  detail.parent().append('<span class="form-message"></span>');
}

function resetMsgs() {

  let formMsgs = [
    $(bookID).next()
    , title.parent().children()[3]
    , description.parent().children()[3]
    , detail.parent().children()[3]];


  formMsgs.forEach(formMsg => {
    $(formMsg).attr('style', 'display:none; ');
  });
}

function validateInputs() {
  let validFlg = true;

  let validatetEles = [title, description, detail];
  validatetEles.forEach(ele => {
    if (validateInput(ele) === false) {
      validFlg = false;
    }
  });

  return validFlg;
}

function validateInput(element) {

  let formMessage = element.parent().children()[3];

  if (element.val() === null || element.val()?.trim().length === 0) {

    Object.assign(formMessage.style, {
      display: 'block',
      color: 'red',
      fontStyle: 'italic'
    });

    $(formMessage).text('Mục Này Không Được Trống');

    return false;
  } else {
    // $(formMessage).attr('style', 'display:none; ');
    return true;
  }
}

async function getBooks() {
  let books = await axios(booksApi);
  return books?.data;
}