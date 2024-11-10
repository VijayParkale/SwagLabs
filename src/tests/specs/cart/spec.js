const CartPage = require('../pageobjects/CartPage');
const { login } = require('../utils/login');
const data = require('../data/users.json');

describe('Cart Page Tests', () => {
    before(async () => {
        await login(data.standardUser.username, data.standardUser.password);
        await browser.url('/cart.html');
    });

    it('should display correct number of items in the cart', async () => {
        const itemCount = await CartPage.getCartItemCount();
        expect(itemCount).to.be.greaterThan(0);
    });

    it('should remove an item from the cart', async () => {
        const initialCount = await CartPage.getCartItemCount();
        await CartPage.removeItem();
        const updatedCount = await CartPage.getCartItemCount();
        expect(updatedCount).to.equal(initialCount - 1);
    });

    it('should navigate to checkout page on clicking checkout button', async () => {
        await CartPage.clickCheckout();
        expect(await browser.getUrl()).to.contain('/checkout-step-one.html');
    });
});
