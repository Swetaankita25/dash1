function add(a, b) {
  return a + b;
}
const ankita = {
  name: "Ankita",
  age: 19,
  city: "JAMSHEDPUR",
  class: "BTECH",
  marks: { java: 90, python: 80, c: 70, javascript: 60 },
  points: [10, 15, 17, 18, 101],
  sum: add,
};
console.log(ankita.name);
console.log(ankita.marks.java);
console.log(ankita.sum(2, 5));
