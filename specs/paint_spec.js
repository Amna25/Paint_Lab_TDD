const assert = require('assert');
const Paint = require('../paint.js');

describe("Paint", function(){

    let paint;

    this.beforeEach(function(){
        paint = new Paint()
    });

    it('should have amount', function(){
        const actual = paint.amount;
        assert.strictEqual(actual, 5)
    });

    it('should check if it is empty', function(){
        const actual = paint.checkIfEmpty();
        assert.strictEqual(actual, false)
    });

    it('should empty itself of paint', function(){
        paint.emptySelf();
        const actual = paint.amount;
        assert.strictEqual(actual, 0);
    });
});