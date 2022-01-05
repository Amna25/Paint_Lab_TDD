const Paint = require("./paint");

const Decorator = function(stock = 0) {
    this.stock = stock;
};

Decorator.prototype.addPaint = function() {
    this.stock++;
}

Decorator.prototype.calculateTotalPaint = function() {
    total_paint = this.stock * paint.amount;
    return total_paint;
};


module.exports = Decorator