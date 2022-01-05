const Paint = function(amount = 5) {
    this.amount = amount
};

Paint.prototype.checkIfEmpty = function() {
    if (this.amount === 0) {
        return true
    }
    else {
        return false
    }
};

Paint.prototype.emptySelf = function() {
    this.amount = 0;
}




module.exports = Paint