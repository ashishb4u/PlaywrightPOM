exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.addToCartBtn = '//a[normalize-space()="Add to cart"]';
        this.cartLink = '#cartur';
        this.homeLink = '#nava';
    }

    async navigateToHome() {
       await this.page.click(this.homeLink);
    }

    async navigateToCart() {
        await this.page.click(this.cartLink);
    }

    async selectProduct(productName) {
        const productSelector = `//a[contains(@class, 'hrefch') and text()='${productName}']`;
        await this.page.click(productSelector);
    }

    async addToCart() {
        this.page.on('dialog', async dialog => {
        await dialog.accept();
        });
        await this.page.click(this.addToCartBtn);
    }
}

