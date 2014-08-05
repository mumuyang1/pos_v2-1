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

Cart.prototype.addByBarcode = function (barcode) {

    var getItem = function (barcode, allItems) {

        var item;

        for (var i = 0; i < allItems.length; i++) {
            if (allItems[i].barcode === barcode) {
                item = allItems[i];
                break;
            }
        }

        return item;
    };

    var allItems = loadAllItems();

    this.add(getItem(barcode, allItems));
};

Cart.prototype.addByBarcodes = function (barcodes) {

    for (var i = 0; i < barcodes.length; i++) {
        this.addByBarcode(barcodes[i]);
    }
}

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

Cart.prototype.calculatePromotions = function (promotionCalculator) {
    for (var i = 0; i < this.cartItems.length; i++) {
        promotionCalculator.calculate(this.cartItems[i]);
    }
};
