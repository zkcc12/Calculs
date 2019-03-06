function add(a, b){
  var result = a + b;
  return result;
}

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});
