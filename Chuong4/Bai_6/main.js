/**
 * Bài 6: Viết chương trình (có sử dụng hàm) kiểm tra xem 1 số có phải là số hoàn hảo không?
 */

let input = prompt("Nhập 1 con số (Kiểm tra xem có phải số hoàn hảo):");
console.log(isPerfectNumber(Number(input))? `${input} là 1 số hoàn hảo` : `${input} không phải là 1 số hoàn hảo`);


function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}
