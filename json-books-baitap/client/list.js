const booksApi = "http://localhost:3001/books";

const table = $('table');
const bookIDFormat = 'bookID_';

renderBooks();

function renderBook(book) {
    return `
    <tr id="${bookIDFormat}${book.id}">
        <td style="text-align: center">${book.id}</td>
        <td>${book.title}</td>
        <td>${book.description}</td>
        <td>${book.detail}</td>
        <td style="text-align: center">${book.status}</td>
        <td>
            <a href="edit.html?id=${book.id}">Sửa</a>
            <a href="#" onclick="deleteBook(${book.id})">Xóa</a>
        </td>
    </tr>
    `;
}


async function renderBooks() {
    let books = await getBooks();
    let booksHTML = books.map(book => {
        return renderBook(book);
    }).join('');

    table.html(table.html() + booksHTML);
}


async function deleteBook(bookID) {
    if (confirm(`Bạn có chắc chắn muốn xóa sách có id :${bookID} không?`)) {
        await axios({
            method: "DELETE",
            url: `${booksApi}/${bookID}`,
            headers: { "Content-Type": "application/json" }
        })

        var bookEle = $(`#${bookIDFormat}${bookID}`);
        if (bookEle) {
            bookEle.remove();
        }
    }
}


async function getBook(bookID) {
    let book = await axios(booksApi + `/${bookID}`);
    return book?.data;
}

async function getBooks() {
    let books = await axios(booksApi);
    return books?.data;
}