var roll = require('../src/script')
var assert = require('assert');

describe('Random_num', function(){
    it('Should return an numbers who will be between 1 to a max value who will be defined in the first argument of the function.', function(){
        var minValue = 1
        var maxValue = 4;
        var output = roll(maxValue);
        var controle = (minValue <= output && output <= maxValue);
        assert.strictEqual(controle, true, 'The value is not between 1 and 4')
    })
});