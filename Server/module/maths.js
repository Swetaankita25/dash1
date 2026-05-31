function sum(a, b) {
  return a + b;
}
function divide(a, b) {
  return a / b;
}
function even(a) {
  if (a % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
module.exports = { add: sum, divide: divide, even: even };
