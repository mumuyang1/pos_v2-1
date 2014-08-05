function printInventory(inputs) {

    var pos = new Pos(new Cart(), new BarcodeScanner(), new PromotionCalculator());
    pos.printInventory(inputs);
}
