function add(a, b){
  var result = a + b;
  return result;
}

QUnit.test("Calcul ok", function( assert ) {
    assert.equal(add(1, 1), 2 );
});

QUnit.test("Int ok", function( assert ) {
    assert.equal(add(1, 1), 2 );
});
