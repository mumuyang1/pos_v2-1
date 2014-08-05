function Pos(cart, promotionCalculator) {
    this.cart = cart;
    this.promotionCalculator = promotionCalculator;
}

Pos.prototype.printInventory = function () {

    var formatPrice = Utils.formatter.formatPrice;

    this.cart.calculatePromotions(this.promotionCalculator);

    var itemsText = '',
        promotionItemsText = '',
        totalPrice = 0,
        promotionTotalPrice = 0;

    for (var i = 0; i < this.cart.cartItems.length; i++) {

        var cartItem = this.cart.cartItems[i],
            item = cartItem.item,
            itemQuantity = cartItem.quantity,
            subtotal = cartItem.getSubtotalWithPromotion();

        if (cartItem.promotionQuantity > 0) {
            promotionItemsText += '名称：' + item.name + '，数量：' + cartItem.promotionQuantity + item.unit + '\n';
            promotionTotalPrice += cartItem.promotionSubtotal;
        }

        itemsText += '名称：' + item.name + '，数量：' + itemQuantity + item.unit +
            '，单价：' + formatPrice(item.price) + '(元)，小计：' + formatPrice(subtotal) + '(元)\n';

        totalPrice += subtotal;
    }

    console.log(
            '***<没钱赚商店>购物清单***\n' +
            '打印时间：' + Utils.formatter.formatDateTime(new Date()) + '\n' +
            '----------------------\n' +
            itemsText +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            promotionItemsText +
            '----------------------\n' +
            '总计：' + formatPrice(totalPrice) + '(元)\n' +
            '节省：' + formatPrice(promotionTotalPrice) + '(元)\n' +
            '**********************'
    );
};