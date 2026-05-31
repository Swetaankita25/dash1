// write a function to find factorial of a number
function findFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
const number = 5;
console.log("The factorial of " + number + " is: " + findFactorial(number));
