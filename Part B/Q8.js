let nums = [10, 3, 7, 20, 13, 2];

const square = nums.map((num) => num * num);
console.log("Squares:", square);

const prime = nums.filter((num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
});
console.log("Prime numbers from Array:",prime);

const sum = nums.reduce((acc,num) => acc + num, 0);
console.log("Sum of Number:",sum);

const descending = nums.sort(function (a, b) {
  return b - a;
});
console.log("Descending order:",descending);
