exports.LoginPage = class LoginPage{

    constructor(page) {
        this.page = page;
        this.loginLink = '#login2';
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginButton = '//button[normalize-space()="Log in"]';
    }
    async navigateToLogin() {
        await this.page.goto('https://www.demoblaze.com/index.html');
        await this.page.click(this.loginLink);
    }

    async login(uname, pwd) {
        await this.page.fill(this.usernameInput, uname);
        await this.page.fill(this.passwordInput, pwd);
        await this.page.click(this.loginButton);
    }
}