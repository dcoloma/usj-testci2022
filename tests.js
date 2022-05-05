test("Valid Plates", function (assert) {
    assert.equal(isValidPlate("0000BBB"), true, "TC-OK-1");
    assert.equal(isValidPlate("1234CDF"), true, "TC-OK-2");
    assert.equal(isValidPlate("5678GHJ"), true, "TC-OK-3");
    assert.equal(isValidPlate("9871KLM"), true, "TC-OK-4");
    assert.equal(isValidPlate("3421NPR"), true, "TC-OK-5");
    assert.equal(isValidPlate("4398STV"), true, "TC-OK-6");
    assert.equal(isValidPlate("8657WXY"), true, "TC-OK-7");
    assert.equal(isValidPlate("9999ZZZ"), true, "TC-OK-8");
    assert.equal(isValidPlate("0000bbb"), true, "TC-OK-9");
    assert.equal(isValidPlate("4321fcd"), true, "TC-OK-10");
    assert.equal(isValidPlate("5876jkl"), true, "TC-OK-11");
    assert.equal(isValidPlate("9187mgh"), true, "TC-OK-12");
    assert.equal(isValidPlate("9831nvt"), true, "TC-OK-13");
    assert.equal(isValidPlate("5676prs"), true, "TC-OK-14");
    assert.equal(isValidPlate("5566ywx"), true, "TC-OK-15");
    assert.equal(isValidPlate("9999zzz"), true, "TC-OK-16");
});

test("Invalid Plates letters in first 4 positions", function (assert) {
    assert.equal(isValidPlate("Z050BCD"), false, "TC-NOK-LETTERS-FIRST-4-1");
    assert.equal(isValidPlate("0B07BFG"), false, "TC-NOK-LETTERS-FIRST-4-2");
    assert.equal(isValidPlate("10C0ZDC"), false, "TC-NOK-LETTERS-FIRST-4-3");
    assert.equal(isValidPlate("200GMNP"), false, "TC-NOK-LETTERS-FIRST-4-4");
});

test("Invalid Plates wrong chars in first 4 positions", function (assert) {
    assert.equal(isValidPlate("$022ZYW"), false, "TC-NOK-WRONGCHAR-FIRST-4-1");
    assert.equal(isValidPlate("1.00BTS"), false, "TC-NOK-WRONGCHAR-FIRST-4-2");
    assert.equal(isValidPlate("36-6CDN"), false, "TC-NOK-WRONGCHAR-FIRST-4-3");
    assert.equal(isValidPlate("897&MPR"), false, "TC-NOK-WRONGCHAR-FIRST-4-4");
});

test("Invalid Plates wrong letter in last 3 positions", function (assert) {
    assert.equal(isValidPlate("0562BÑC"), false, "TC-NOK-WRONGLETTER-LAST-3-1");
    assert.equal(isValidPlate("0235BBQ"), false, "TC-NOK-WRONGLETTER-LAST-3-2");
    assert.equal(isValidPlate("7463ABC"), false, "TC-NOK-WRONGLETTER-LAST-3-3");
    assert.equal(isValidPlate("6713DEC"), false, "TC-NOK-WRONGLETTER-LAST-3-4");
    assert.equal(isValidPlate("2598PSI"), false, "TC-NOK-WRONGLETTER-LAST-3-5");
    assert.equal(isValidPlate("2233ROT"), false, "TC-NOK-WRONGLETTER-LAST-3-6");
    assert.equal(isValidPlate("5235UFG"), false, "TC-NOK-WRONGLETTER-LAST-3-7");
});

test("Invalid Plates number in last 3 positions", function (assert) {
    assert.equal(isValidPlate("37459BB"), false, "TC-NOK-NUMBER-LAST-3-1");
    assert.equal(isValidPlate("8274D3F"), false, "TC-NOK-NUMBER-LAST-3-2");
    assert.equal(isValidPlate("0976HJ2"), false, "TC-NOK-NUMBER-LAST-3-3");
});

test("Invalid Plates wrong char in last 3 positions", function (assert) {
    assert.equal(isValidPlate("0000Z.W"), false, "TC-NOK-WRONGCHAR-LAST-3-1");
    assert.equal(isValidPlate("0000%DW"), false, "TC-NOK-WRONGCHAR-LAST-3-2");
    assert.equal(isValidPlate("0000PP&"), false, "TC-NOK-WRONGCHAR-LAST-3-3");
});
