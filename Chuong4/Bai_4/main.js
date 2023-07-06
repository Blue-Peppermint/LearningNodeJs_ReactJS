/**
 * Bài 4: Viết chương trình sử dụng hàm truyền vào một dãy số sau đó:
 * 
 *  in dãy số đã nhập
    Tính tổng của dãy số
    Tìm số lớn nhất
    Tìm số nhỏ nhất

Sử dụng đối tượng arguments
 */

let input = prompt("Nhập dãy số, cách nhau bởi dấu phẩy:");
let numbers = input.split(",").map(Number);
processNumbers(...numbers);


function processNumbers() {
    let numbers = Array.from(arguments);
    console.log("Dãy số đã nhập:", numbers);
    
    let total = calTotal(...numbers);
    console.log("Tổng của dãy số:", total);
    
    let max = findMax(...numbers);
    console.log("Số lớn nhất:", max);
    
    let min = findMin(...numbers);
    console.log("Số nhỏ nhất:", min);
  }
  
function calTotal(){
    let numbers = Array.from(arguments);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
}

function findMax (){
    let numbers = Array.from(arguments);
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
}

function findMin (){
    let numbers = Array.from(arguments);
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }
    return min;
}