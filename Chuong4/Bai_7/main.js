/**
 * Bài 7: Viết chương trình có sử dụng hàm nhận vào 1 dãy số => in ra các số nguyên tố trong dãy đó
 */




let input = prompt("Nhập dãy số, cách nhau bởi dấu phẩy:");
let numbers = input.split(",").map(Number);

printPrimes(...numbers);

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimes() {
  let numbers = Array.from(arguments);
  console.log("Các số nguyên tố trong dãy số:");
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      console.log(numbers[i]);
    }
  }
}