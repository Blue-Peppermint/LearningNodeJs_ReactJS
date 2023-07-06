/**
 * Bài 5: Viết chương trình (có sử dụng hàm) kiểm tra xem 1 số có phải là số nguyên tố không?
 */

let input = prompt("Nhập 1 con số (Kiểm tra xem có phải số NT):");
console.log(isPrime(Number(input))? `${input} là 1 số nguyên tố` : `${input} không phải là 1 số nguyên tố`);

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