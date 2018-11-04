// With syntax will ease the object property modifications
// and will be easy to handle data in object

var obj = {
  a: 1,
  b: 2,
  c: 3
};

// harder way
obj.a = obj.b * obj.c;
console.log(obj);

// using with keyword
with (obj) {
  a = b * c + 1;
  c = 101;
}

console.log(obj);
