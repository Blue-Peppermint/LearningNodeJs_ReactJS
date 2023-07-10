/**
 * Bài 4: Viết chương trình có sử dụng hàm
 * 
 * 
 *  nhập 1 mảng các số nguyên
    nhân 3 giá trị mỗi phần tử trong mảng (dùng map)
    xuất mảng mới ra màn hình.
    tính tổng các phần tử trong mảng (dùng reduce)
    kiểm tra xem thử có phải tất cả các phần tử đều lớn hơn 5 không? (dùng every)
    kiểm tra xem thử có phần tử nào lớn hơn 5 không? (dùng some)
 */


var arr = input();


processArray(arr);

function processArray(arr) {
    const newArray = arr.map(number => number * 3);
    console.log('Mảng mới:', newArray);

    const sum = newArray.reduce((acc, cur) => acc + cur, 0);
    console.log('Tổng các phần tử trong mảng:', sum);

    const allGreaterThanFive = newArray.every(number => number > 5);
    console.log('Tất cả các phần tử đều lớn hơn 5:', allGreaterThanFive);

    const someGreaterThanFive = newArray.some(number => number > 5);
    console.log('Có phần tử nào lớn hơn 5:', someGreaterThanFive);
}

function input() {
    let n = prompt(`Nhập số lượng phần tử của mảng :`);
    let value = [];

    for (let i = 0; i < n;) {
        let inputVal = prompt(`Nhập phần tử thứ ${++i} của mảng :`);
        while(!isNumeric(inputVal)){
            inputVal = prompt(`Nhập phần tử thứ ${++i} của mảng (Là 1 con số) :`);
        };
        value.push(Number(inputVal));
    }

    return value;
}





function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

