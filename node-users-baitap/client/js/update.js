const userAPI = "http://localhost:4000/users";
const updateUserId = getParamVal('userId');

getUserInfo();

async function getUserInfo(){
    

    try {
        let result = await axios({
            method: "GET",
            url: `${userAPI}?id=${updateUserId}`
        });

        let user = result?.data[0];

        if (user) {
            $('input[name="email"]').val(user?.email);
            $('input[name="fullname"]').val(user?.fullname);


            const input = $('input[name="avatar"]')[0];
            const dataTransfer = new DataTransfer();

            // Create a new File object
            const file = new File(['file contents'], user?.avatar, {type: 'text/plain'});

            // Add the File object to the DataTransfer object
            dataTransfer.items.add(file);

            // Set the files property of the file input to the files contained in the DataTransfer object
            input.files = dataTransfer.files;

            // console.log(input.files[0].name);
        } else {
            throw new Error("User Không Tồn Tại");
        }

    } catch (error) {
        console.log('Lỗi ' + error);
        // tblUsers.innerHTML = '<p style="color: red; background: yellow">Xảy ra lỗi!</p>';
    }

}

$('form').submit(async(e)=>{
    e.preventDefault();

    if(!confirm('Bạn có chắc muốn chỉnh sửa không?')){
        return;
    }

    const formValue = {};
    for (const el of e.target) {
        if (el.name) {
            if(el.name == 'avatar'){
                formValue['avatar'] = el.value.split('\\').pop();
            }else{
                formValue[el.name] = el.value;
            }
        }
    }

    if(!validateInput(formValue)){
        return;
    }

    formValue['id'] = updateUserId;

    try {
        await axios({
            method: "PUT",
            url: userAPI,
            data: formValue,
            headers: { "Content-Type": "application/json" },
        });

        location = 'index.html?msg=1';
    } catch (error) {
        // var errorElement = document.querySelector('.error');
        // errorElement.innerHTML = '<p style="color: red; background: yellow">Xảy ra lỗi!</p>';
    }
});


function getParamVal(key) {
    // Get the query string from the URL
    let query = $(location).attr('search');

    // Remove the '?' character from the beginning of the query string
    query = query.substring(1);

    // Split the query string by '&' to get an array of key-value pairs
    let params = query.split('&');

    // Find the key-value pair with the key 'id'
    let keyIDPair = params.find(item => item.startsWith(`${key}=`));

    // Split the key-value pair by '=' to get the value of 'id'
    let paramVal = keyIDPair.split('=')[1];

    return paramVal;
}

function validateInput(formVal){
    if(formVal.email.trim().length === 0){
        alert('Email không được để trống');
        return false;
    }else if(formVal?.password?.trim().length === 0){
        alert('Password không được để trống');
        return false;
    }
    return true;
}	