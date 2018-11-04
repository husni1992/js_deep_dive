// Method1: This is function expression
var foo = function baz() {};

// Method2: This is function declaration
function bam() {}

// Method3: This is an annonymous function
var baz = function() {};




// below example is one disadvantage of method 3
var count = 0;
var foo = function(param) {
  if (count <= 5) {
    console.log(param);
    count++;
    setGLobal();
    foo(`count: ${count}`);
  }
};

function setGLobal() {
  foo = 90;
}
foo("1st"); // this will run and recursive function will fail, because foo is reassigned
