function printInventory(inputs) {

    var barcodeScanner = new BarcodeScanner();

    var barcodes = [];
    for (var i = 0; i < inputs.length; i ++) {
        barcodes = barcodes.concat(barcodeScanner.scan(inputs[i]));
    }

    var cart = new Cart();
    cart.addByBarcodes(barcodes);

    var pos = new Pos(cart, new PromotionCalculator());
    pos.printInventory(inputs);
}
