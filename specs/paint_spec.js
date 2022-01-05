const assert = require('assert');
const Paint = require('../paint.js');

describe("Paint", function(){

    let paint;

    this.beforeEach(function(){
        paint = new Paint(0)
    });

    it('should have amount', function(){
        const actual = paint.amount;
        assert.strictEqual(actual, 0)
    });

    it('should check if it is empty', function(){
        const actual = paint.checkIfEmpty();
        assert.strictEqual(actual, true)
    });

    it('should empty itself of paint', function(){
        paint.amount = 5;
        paint.emptySelf();
        const actual = paint.amount;
        assert.strictEqual(actual, 0);
    });
});