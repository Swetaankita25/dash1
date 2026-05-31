const arr = [12, "ANKITA", "MATHS", [1, 2, 3, 4, 5], "HINDI"];

console.log(arr[2]);
console.log(arr[3][2]);

arr[3][2] = "maths";
console.log(arr);

arr.length;
console.log(arr.length);
arr.push(16, "ENGLISH");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(10);
console.log(arr);
arr.shift();
console.log(arr);
const s = arr.slice(0, 3);
console.log(s);
