let submitBtn = document.querySelector('input[type="submit"]');
let bankinh = document.querySelector("#bankinh");
let dientich = document.querySelector("#dientich");
let errorMsg = document.querySelector("#error");

errorMsg.setAttribute(
    "style", "color: red; text-align: center; font-size: larger; font-weight: bold"
);

// console.log(submitBtn)

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()

    errorMsg.innerHTML = '';

    if ((bankinh.value && dientich.value) ||
        (!bankinh.value && !dientich.value)) {
        errorMsg.innerHTML = 'Vui Lòng Nhập 1 Giá Trị !! (hoặc bán kính hoặc diện tích) '
    } else {
        if (bankinh.value) {
            dientich.value = (Number(bankinh.value) * Number(bankinh.value) * 3.14
            ).toFixed(2)
        }
        if (dientich.value) {
            bankinh.value = Math.sqrt(Number(dientich.value) / 3.14).toFixed(2)
        }
    }
})