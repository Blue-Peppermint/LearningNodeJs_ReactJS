const userAPI = "http://localhost:4000/users";



$('#register-form').submit(async(e)=>{
    e.preventDefault();

    const formVal = {};

    for(const ele of e.target){
        if(ele.name){
            if(ele.name == 'avatar'){
                formVal['avatar'] = ele.value.split('\\').pop();
            }else{
                formVal[ele.name] = ele.value;
            }
        }
    }

    if(!validateInput(formVal)){
        return;
    }

    await axios({
        method: "POST",
        url: userAPI,
        data: formVal,
        headers: { "Content-Type": "application/json" },
    });

    location = 'index.html?msg=1';
});

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