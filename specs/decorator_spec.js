const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');


describe("Decorator", function(){
    let decorator;

    beforeEach(function(){
        decorator = new Decorator()
        paint = new Paint()
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

    it('should calculate total litres of paint', function(){
        decorator.addPaint();
        decorator.addPaint();
        const actual = decorator.calculateTotalPaint();
        assert.strictEqual(actual, 10);
    });

});