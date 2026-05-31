//write a function to find minimum number in an array without using min function
function findSmallestNumber(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
const numbers = [23, 54, 32, 12, 4, 57];
console.log(
  "The smallest number in the array is: " + findSmallestNumber(numbers),
);
