var t = 99;

function run() {
  var t = 88;
  function a() {
    function b() {
      t = window.t;
      function c() {
        console.log(t);
      }
      c();
    }
    b();
  }
  a();
}

run();
