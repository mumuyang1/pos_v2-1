function Cart() {
    this.cartItems = [];

}

Cart.prototype.add = function (item) {

    var existCartItem = this.get(item.barcode);

    if (existCartItem) {
        existCartItem.quantity++;
    } else {
        this.cartItems.push(new CartItem(item, 1));
    }
};

Cart.prototype.addByArray = function (items) {
    for (var i = 0; i < items.length; i++) {
        this.add(items[i]);
    }
};

Cart.prototype.get = function (barcode) {

    var cartItem;

    for (var i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].item.barcode === barcode) {
            cartItem = this.cartItems[i];
            break;
        }
    }

    return cartItem;
};

Cart.prototype.calculatePromotions = function (promotionCalculator) {
    for (var i = 0; i < this.cartItems.length; i++) {
        promotionCalculator.calculate(this.cartItems[i]);
    }
};
