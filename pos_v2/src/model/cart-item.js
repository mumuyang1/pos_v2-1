function CartItem(item, quantity) {
    this.item = item;
    this.quantity = quantity || 0;
    this.promotionSubtotal = 0.00;
    this.promotionQuantity = 0;
}

CartItem.prototype.getBarcode = function () {
    return this.item.barcode;
}

CartItem.prototype.getSubtotal = function () {
    return this.item.price * this.quantity;
};

CartItem.prototype.getSubtotalWithPromotion = function () {
    return this.getSubtotal() - this.promotionSubtotal;
};