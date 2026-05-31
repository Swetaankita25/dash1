//write a function to find sum of all numbers in an array
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const numbers = [23, 54, 32, 12, 4, 57];
console.log("The sum of all numbers in the array is: " + findSum(numbers));
