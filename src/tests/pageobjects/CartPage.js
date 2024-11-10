class CartPage {
    get cartItems() { return $$('.cart_item'); }
    get checkoutButton() { return $('#checkout'); }
    get removeItemButton() { return $('.cart_button'); } // Assume one item, for simplicity

    open() {
        browser.url('/cart.html');
    }

    getCartItemCount() {
        return this.cartItems.length;
    }

    removeItem() {
        this.removeItemButton.click();
    }

    clickCheckout() {
        this.checkoutButton.click();
    }
}

module.exports = new CartPage();
