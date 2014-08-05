function printInventory(inputs) {

    var allItems = loadAllItems();
    var barcodeHandler = new BarcodeHandler(allItems);

    var cart = new Cart();

    for (var i = 0; i < inputs.length; i++) {
        var cartItem = barcodeHandler.read(inputs[i]);
        cart.add(cartItem.item, cartItem.quantity);
    }

    var allPromotions = loadPromotions();
    var promotionCalculator = new PromotionCalculator(allPromotions);

    var pos = new Pos(cart, promotionCalculator);
    pos.printInventory(inputs);
}
