const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');


describe("Decorator", function(){
    let decorator;

    beforeEach(function(){
        decorator = new Decorator()
        paint = new Paint()
        room = new Room(10)
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

    it('should calculate if enough paint for room__true', function(){
        decorator.addPaint();
        decorator.addPaint();
        const actual = decorator.hasEnoughPaint(room);
        assert.strictEqual(actual, true);
    });

    it('should calculate if enough paint for room__false', function(){
        const actual = decorator.hasEnoughPaint(room);
        assert.strictEqual(actual, false);
    });

    it('should paint room if enough stock__true', function(room){
        decorator.addPaint();
        decorator.addPaint();
        decorator.decoratorPaintRoom(room);
        actual = room.painted;
        assert.strictEqual(actual, true);
    });

});