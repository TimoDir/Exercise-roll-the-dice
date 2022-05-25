var roll = require('./script_test')
var assert = require('assert');

describe('Random_num', function(){
    var minValue = 1
    var maxValue = 4;
    it('Should return an numbers between 1 to a max value who will be defined in the first argument with undefined option argument.', function(){
        // Test for undefined option argument 100 time.
        var output = new Array(100).fill(0).map(number => number + roll(maxValue));
        var controle = output.map(number => minValue <= number <= maxValue)
        assert.strictEqual(controle.every(number => number == true), true, 'Some values is not between 1 and 4')
    });
    it('Should return an numbers between 1 to a max value who will be defined in the first argument with the advantage option argument.', function(){
        // Test for 'advantage' option argument 100 time.
        var outputAdv = new Array(100).fill(0).map(number => number + roll(maxValue, 'advantage'));
        var controleAdv = outputAdv.map(number => minValue <= number <= maxValue)
        assert.strictEqual(controleAdv.every(number => number == true), true, "Some values is not between 1 and 4 with 'advantage' option argument")
    });
    it('Should return an numbers between 1 to a max value who will be defined in the first argument with the disadvantage option argument.', function(){
        // Test for 'disadvantage' option argument 100 time.
        var outputDisadv = new Array(100).fill(0).map(number => number + roll(maxValue, 'disadvantage'));
        var controleDisav = outputDisadv.map(number => minValue <= number <= maxValue)
        assert.strictEqual(controleDisav.every(number => number == true), true, "Some values is not between 1 and 4 with 'disadvantage' option argument")
    });
});