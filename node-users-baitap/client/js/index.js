const userAPI = "http://localhost:4000/users";


renderUsers();


function renderUser(user) {
    return `
    <tr align="center">
        <td>${user?.id}</td>
        <td>${user?.email}</td>
        <td><img src="${user?.avatar}" alt="" width="100px" height="100px" /></td>
        <td>${user?.fullname}</td>
        <td>
            <button onclick="editUser(${user?.id})" >Sửa</button>
            <button onclick="deleteUser(${user?.id})">Xóa</button>
        </td>
    </tr>`;
}


async function renderUsers() {
    const tblUsers = $('.index-user');

    try {
        var users = await axios({
            method: "GET",
            url: userAPI,
            // headers: { Authorization: `Bearer ${currentUser.token}` },
        });

        users = users?.data;

        if (users) {
            tblUsers.append(users.map(user => {
                return renderUser(user);
            }).join(''));
        } else {
            throw new Error("Something went wrong");
        }
    } catch (error) {
        console.log('Lỗi ' + error);
        tblUsers.innerHTML = '<p style="color: red; background: yellow">Xảy ra lỗi!</p>';
    }
}

async function deleteUser (userId){
    if (confirm("Bạn có chắc muốn xóa?")) {
        const formValue = {userId};

        await axios({
            method: "DELETE",
            url: userAPI,
            data: formValue,
            headers: { "Content-Type": "application/json" }
        });

        // await renderUsers();
        location.reload();
    }
}

function editUser (userId){
    location = `capnhat.html?userId=${userId}`;
}