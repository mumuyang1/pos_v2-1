function BarcodeHandler(allItems) {
    this.allItems = allItems;
}

BarcodeHandler.prototype.read = function (barcodeText) {

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

    var barcodeArray = barcodeText.split('-');
    var item = getItem(barcodeArray[0], this.allItems);
    var quantity = parseFloat(barcodeArray[1]) || 1;


    return new CartItem(item, quantity);
};