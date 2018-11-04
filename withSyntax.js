// With syntax will ease the object property modifications
// and will be easy to handle data in object
// ***This is very dangerous than eval(), because with keyword will create a whole new lexical scope***
// ** if with keyword present, the compiler disables its optimizations as it has to prepare for worst case **

var obj = {
  a: 1,
  b: 2,
  c: 3
};

// harder way
obj.a = obj.b + obj.c;
console.log(obj);

// using with keyword
with (obj) {
  a = b + c;
  d = 101;
  d = "goFish";
}

console.log(obj);

// d will not be initialized inside obj scope, instead it will go to global scope
console.log(obj.d);

console.log(d);
