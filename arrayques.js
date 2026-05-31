//write a function to find maximum number in an array without using max function
function findLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
const numbers = [23, 54, 32, 12, 4, 57];
const largestNumber = findLargestNumber(numbers);
console.log("The largest number in the array is: " + largestNumber);
