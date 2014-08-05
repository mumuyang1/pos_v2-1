function PromotionCalculator(promotions) {
    this.promotions = promotions;
}

PromotionCalculator.prototype.calculate = function (cartItems) {

    var getPromotion = function (type, promotions) {

        var promotion;

        for (var i = 0; i < promotions.length; i++) {
            if (promotions[i].type === type) {
                promotion = promotions[i];
                break;
            }
        }

        return promotion;
    };

    var isPromotion = function (cartItem, promotion) {

        var isPromotion = false;

        for (var i = 0; i < promotion.barcodes.length; i++) {
            if (cartItem.getBarcode() === promotion.barcodes[i]) {
                isPromotion = true;
                break;
            }
        }

        return isPromotion;
    };

    var buyTowGetOneFree = getPromotion('BUY_TWO_GET_ONE_FREE', this.promotions);

    for (var i = 0; i < cartItems.length; i++) {

        var cartItem = cartItems[i];

        if (buyTowGetOneFree && isPromotion(cartItem, buyTowGetOneFree)) {
            cartItem.promotionQuantity = parseInt(cartItem.quantity / 3);
            cartItem.promotionSubtotal = cartItem.promotionQuantity * cartItem.item.price;
        }
    }
};

