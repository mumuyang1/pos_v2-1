function BarcodeScanner() {
    Scanner.call(this);
}

BarcodeScanner.prototype = Object.create(Scanner.prototype);

BarcodeScanner.prototype.constructor = BarcodeScanner;

BarcodeScanner.prototype.scan = function (barcodeText) {

    var barcodes = [];

    var barcodeArray = barcodeText.split('-');
    var code = barcodeArray[0];
    var count = barcodeArray[1] || 1;

    for (var i = 0; i < count; i++) {
        barcodes.push(code);
    }

    return barcodes;
};

