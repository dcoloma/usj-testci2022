test("Valid Plate", function (assert) {
  assert.equal(isValidPlate("0000BBB"), true, "Lower Boundary");
});
test("Invalid Plate", function (assert) {
  assert.equal(isValidPlate("0000AAA"), false, "Vowels as letters");
});

