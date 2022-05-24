var assert = require('assert');

describe('Random_num', function(){
    it('Should return an numbers who will be between 1 to a max value who will be defined in the first argument of the function.', function(){
        var minValue = 1
        var maxValue = 4;
        var output = minValue <= Math.floor(Math.random()*maxValue)+1 <= maxValue;
        assert.strictEqual(output, true, 'The value is between 1 and 4')
    })
});
