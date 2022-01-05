const Decorator = function(stock = 0) {
    this.stock = stock;
};

Decorator.prototype.addPaint = function(){
    this.stock++;
}




module.exports = Decorator