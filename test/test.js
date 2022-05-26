var roll = require('./script_test.mjs')
var assert = require('assert');

describe('Random_num', function(){
    const minValue = 1
    const maxValue = 4;
    const expectedResult = new Array(100).fill(true);
    it('Should return an numbers between 1 to a max value who will be defined in the first argument with undefined option argument.', function(){
        // Test for undefined option argument 100 time.
        const output = new Array(100).fill(0).map(number => number + roll(maxValue));
        const controle = output.map(number => minValue <= number <= maxValue);
        assert.strictEqual(controle.includes(false), expectedResult.includes(false), 'Some values is not between 1 and 4')
    });
    it('Should return an numbers between 1 to a max value who will be defined in the first argument with the advantage option argument.', function(){
        // Test for 'advantage' option argument 100 time.
        const output = new Array(100).fill(0).map(number => number + roll(maxValue, 'advantage'));
        const controle = output.map(number => minValue <= number <= maxValue)
        assert.strictEqual(controle.includes(false), expectedResult.includes(false), "Some values is not between 1 and 4 with 'advantage' option argument")
    });
    it('Should return an numbers between 1 to a max value who will be defined in the first argument with the disadvantage option argument.', function(){
        // Test for 'disadvantage' option argument 100 time.
        const output = new Array(100).fill(0).map(number => number + roll(maxValue, 'disadvantage'));
        const controle = output.map(number => minValue <= number <= maxValue)
        assert.strictEqual(controle.includes(false), expectedResult.includes(false), "Some values is not between 1 and 4 with 'disadvantage' option argument")
    });
});