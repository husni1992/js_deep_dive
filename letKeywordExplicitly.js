// // Hoisting is simple, that the declarations of functions or variables will move to top, and expressions will not

// // Hoisting example 1
// console.log(a);
// console.log(b);
// var a = b;
// var b = 2;
// console.log(a);
// console.log(b);

// // Above code get hoisted, variable declarations are moved to top like below

// var a;
// var b;
// console.log(a); // undefined
// console.log(b); // undefined
// a = b;
// b = 2;
// console.log(a); // undefined
// console.log(b); // 2

// // Hoisting example 2
// var a = b();
// var c = d();

// console.log(a);
// console.log(c);
// console.log(x);

// x = 90;

// function b() {
//   return c;
// }

// var d = function() {
//   return b();
// };

// why hoisting is done in js engine?
// Because at some mutual function recursions, it will have to declare only 1 function to the top.
// Otherwise it cannot be compiled, like below example
debugger;
console.log(a(1));

function a(foo) {
  console.log("fn: a");
  if (foo > 20) return foo;
  return b(foo + 2);
}

function b(foo) {
  console.log("fn: b");
  return c(foo) + 1;
}

function c(foo) {
  console.log("fn: c");
  return a(foo * 2);
}
