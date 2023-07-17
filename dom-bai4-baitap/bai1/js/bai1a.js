
var cDaiEle = document.querySelector('input[name="chieudai"]');
var cRongEle = document.querySelector('input[name="chieurong"]');
var cDaiMessage = document.querySelectorAll('.form-message')[0];
var cRongMessage = document.querySelectorAll('.form-message')[1];
var tinhBtn = document.querySelector('input[type="submit"]');
var resultMessage = document.querySelector('#result');



function InputElement (inputEle, alertEle){
    this.inputEle = inputEle;
    this.alertEle = alertEle;
}


const inputEles = [];
inputEles.push(new InputElement(cDaiEle, cDaiMessage));
inputEles.push(new InputElement(cRongEle, cRongMessage));


tinhBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    setDefaultSkin();
    if(validateInput()){
        let length = Number(inputEles[0].inputEle.value);
        let width = Number(inputEles[1].inputEle.value);
        resultMessage.innerHTML = `<span>Chu vi: ${getPerimeter(length, width)}</span>
        <br>
        <span>Diện tích: ${getArea(length, width)}</span>`;
    }else{

    }
})

function setDefaultSkin(){
    inputEles.forEach((ele) => {
        Object.assign(ele.inputEle.style, {
            borderRadius: '0px',
            border: '1px solid black'
        });

        ele.alertEle.innerHTML = '';
    });

    resultMessage.innerHTML = '';
}


function validateInput(){
    let errorEles = inputEles.filter((input)=>{
        return input.inputEle.value.trim().length ===0;
    });

    errorEles.forEach((errorEle) => {
        Object.assign(errorEle.inputEle.style, {
            borderRadius: '5px',
            border: '2px solid red'
        });

        errorEle.alertEle.innerHTML = '<em style="color: red">Vui Lòng Nhập</em>';
    });

    if(errorEles.length !== 0){
        resultMessage.innerHTML = '<span style="color: red">vui lòng nhập đầy đủ thông tin vào!</span>'
        return false;
    }else{
        return true;
    }

}

function getPerimeter(length, width){
    return 2 * (length + width);
}


function getArea (length, width){
    return length * width;
}