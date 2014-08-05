function Cart() {
    this.cartItems = [];
}

Cart.prototype.add = function (item, quantity) {

    var existCartItem = this.get(item.barcode);

    if (existCartItem) {
        existCartItem.quantity += quantity;
    } else {
        this.cartItems.push(new CartItem(item, quantity));
    }
};

Cart.prototype.get = function (barcode) {

    var cartItem;

    for (var i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].getBarcode() === barcode) {
            cartItem = this.cartItems[i];
            break;
        }
    }

    return cartItem;
};
