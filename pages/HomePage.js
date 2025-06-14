exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.productList = '//*[@id="tbodyid"]/div[1]/div/div/h4/a';
        this.addToCartBtn = '//a[normalize-space()="Add to cart"]';
        this.cartLink = '#cartur';
        this.homeLink = '#nava';
    }

    async navigateToHome() {
        await this.page.goto('https://www.demoblaze.com/index.html');
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
        console.log(dialog.message());
        await dialog.accept();
        });
        await this.page.click(this.addToCartBtn);
    }
}

