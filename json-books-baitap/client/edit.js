const booksApi = "http://localhost:3001/books";

const form = $('form');
const bookID = $('input[name="id"]');
const title = $('input[name="title"]');
const description = $('textarea[name="description"]');
const detail = $('textarea[name="detail"]');
const statusSelect = $('select[name="status"]');
const addBtn = $('input[type="submit"]');

const editingBookID = getEditingBookID();

initMsgs();
renderBook();

form.on('submit', async function (event) {
    event.preventDefault();
    resetMsgs();

    if (validateInputs() && confirm("Bạn có chắc sửa thông tin sách này không?")) {
        let editedBook = {
            id: editingBookID
            , title: $(title).val()
            , description: $(description).val()
            , detail: $(detail).val()
            , status: $(statusSelect).val() === 'true' ? '1' : '0'
        }

        try {
            let response = await axios({
                method: "PUT",
                url: `${booksApi}/${editingBookID}`,
                data: editedBook,
                headers: { "Content-Type": "application/json" }
            });

            if (response.status === 200) {
                $(bookID).next().attr('style', 'font-weight: bold; color: green; font-size: 1.17em;');
                $(bookID).next().text(`SỬA THÀNH CÔNG VỚI SÁCH CÓ ID: ${editingBookID}`);
            } else {
                $(bookID).next().attr('style', 'font-weight: bold; color: red; font-size: 1.17em;');
                $(bookID).next().text(`SỬA THẤT BẠI VỚI SÁCH CÓ ID: ${editingBookID}`);
                console.log('An error occurred:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }

    }
});




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


async function renderBook() {
    let book = await getBook(editingBookID);
    bookID.val(book.id);
    title.val(book.title);
    description.val(book.description);
    detail.val(book.detail);
    statusSelect.val(book.status === '1' ? 'true' : 'false');
}

function getEditingBookID() {
    // Get the query string from the URL
    let query = $(location).attr('search');

    // Remove the '?' character from the beginning of the query string
    query = query.substring(1);

    // Split the query string by '&' to get an array of key-value pairs
    let params = query.split('&');

    // Find the key-value pair with the key 'id'
    let bookIdPair = params.find(item => item.startsWith('id='));

    // Split the key-value pair by '=' to get the value of 'id'
    let bookId = bookIdPair.split('=')[1];

    return bookId;
}

async function getBook(bookID) {
    let book = await axios(booksApi + `/${bookID}`);
    return book?.data;
}
