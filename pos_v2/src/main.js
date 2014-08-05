function printInventory(inputs) {

    var allItems = loadAllItems(),
        barcodeHandler = new BarcodeHandler(allItems),
        cart = new Cart();

    for (var i = 0; i < inputs.length; i++) {
        var cartItem = barcodeHandler.read(inputs[i]);
        cart.add(cartItem.item, cartItem.quantity);
    }

    var pos = new Pos(cart, new PromotionCalculator());
    pos.printInventory(inputs);
}
