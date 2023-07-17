const submitFrm = document.querySelector('#form');
const errorMsg = document.querySelector("#error");

const chuoiGocEle = document.querySelector("#chuoigoc");
const doanThayTheEle = document.querySelector("#doanthaythe");
const tuGocEle = document.querySelector("#tugoc");
const tuThayTheEle = document.querySelector("#tuthaythe");


Object.assign(errorMsg.style, {
    color: 'red',
    textAlign: 'center',
    fontSize: 'larger',
    fontWeight: 'bold'
});


submitFrm.addEventListener("submit", (e) => {
  e.preventDefault()

  errorMsg.innerText = '';
  doanThayTheEle.innerText = '';

  if (chuoiGocEle.value && tuGocEle.value && tuThayTheEle.value) {
    doanThayTheEle.innerText = chuoiGocEle.value.replaceAll(tuGocEle.value, tuThayTheEle.value)
  } else {
    errorMsg.innerText = 'Vui Lòng Nhập Đủ Thông Tin !!';
  }
});