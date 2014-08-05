function PromotionCalculator() {

}

PromotionCalculator.prototype.calculate = function (cartItem) {

    var getPromotion = function (type) {

        var promotions = loadPromotions();

        var promotion;

        for (var i = 0; i < promotions.length; i++) {
            if (promotions[i].type === type) {
                promotion = promotions[i];
                break;
            }
        }

        return promotion;
    };

    var buyTowGetOneFree = getPromotion('BUY_TWO_GET_ONE_FREE');

    if (buyTowGetOneFree) {
        cartItem.promotionQuantity = parseInt(cartItem.quantity / 3);
        cartItem.promotionSubtotal = cartItem.promotionQuantity * cartItem.item.price;
    }
};

