var foo = "bar";

function bar() {
  var foo = "baz";

  function baz(foo) {
    foo = "bam";
    bam = "yay"; // bam is not inside local scope, it will ask global scope for bam, if not there alse,
    // it will create a global var called bam
  }

  baz();
}

bar();
console.log(foo);
console.log(bam);
baz();
