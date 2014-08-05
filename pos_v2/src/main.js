function printInventory(inputs) {

    var allItems = loadAllItems(),
        allPromotions = loadPromotions(),
        barcodeHandler = new BarcodeHandler(allItems),
        cart = new Cart(),
        promotionCalculator = new PromotionCalculator(allPromotions);

    for (var i = 0; i < inputs.length; i++) {
        var cartItem = barcodeHandler.read(inputs[i]);
        cart.add(cartItem.item, cartItem.quantity);
    }

    var pos = new Pos(cart, promotionCalculator);
    pos.printInventory(inputs);
}
