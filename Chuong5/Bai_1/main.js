/**
 * Bài 1: Viết chương trình nhập 1 mảng, sau đó xuất mảng vừa nhập ra màn hình
 */

let n = prompt(`Nhập số lượng phần tử của mảng :`);
var arr = [];

for(let i = 0; i < n; ){
    arr.push(prompt(`Nhập phần tử thứ ${++i} của mảng :`));
}

if( !isNaN(n) && Number(n) > 0 ){
    console.log(`Mảng vừa nhập là : ${arr}`);
}