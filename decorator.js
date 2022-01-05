const Paint = require("./paint");
const Room = require("./room.js")

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


module.exports = Decorator