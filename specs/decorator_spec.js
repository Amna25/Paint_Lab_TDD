const assert = require('assert');
const Decorator = require('../decorator.js');


describe("Decorator", function(){
    let decorator;

    beforeEach(function(){
        decorator = new Decorator()
    });

    it('should have empty stock', function(){
        const actual = decorator.stock;
        assert.strictEqual(actual, 0);
    });

    it('should add one can of paint to stock', function(){
        decorator.addPaint();
        const actual = decorator.stock;
        assert.strictEqual(actual, 1)
    });

})