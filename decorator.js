const Decorator = function(stock = 0) {
    this.stock = stock;
};

Decorator.prototype.addPaint = function() {
    this.stock++;
}

Decorator.prototype.calculateTotalPaint = function() {
    let total_paint = this.stock * paint.amount;
    return total_paint;
};

Decorator.prototype.hasEnoughPaint = function(room) {
    total_paint = this.calculateTotalPaint();
    if (total_paint >= room.area) {
        return true
    }
    else {
        return false
    }
};

Decorator.prototype.decoratorPaintRoom = function(room) {
    result = this.hasEnoughPaint(room);
    if (result === true) {
        room.painted = true
    }
    else {
        room.painted = false
    }
};


module.exports = Decorator