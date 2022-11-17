const ParentPageObject = require("./parentPageObject");

class LoginErrorPageObject extends ParentPageObject {

    get acceptCookieBtn () {
        return $('#onetrust-accept-btn-handler')
    }

    get loginBtn () {
        return $('a[data-testid="nav-login"]')
    }

    get emailField () {
        return $('#email')
    }

    get passwordField () {
        return $('#password')
    }

    get notARobotVer() {
        return $('iframe[title="reCAPTCHA"]')
    }

    get loginConfirmBtn () {
        return $('button[class="css-2miedc"]')
    }

      async goToHomePage () {
        await browser.url('')
    }

    async verifyHomePage () {
        await this.isElementEqualToExpected($('h2=Recommended For You'),
          'Recommended For You')
    }

    async openLogin () {
        await this.acceptCookieBtn.click()
        await this.loginBtn.click()
        await this.isElementEqualToExpected($('p=Log in to your Student Beans account'),
        'Log in to your Student Beans account')
    }

    async enterCredentials (email, password) {
        await this.emailField.setValue(email)
        await this.passwordField.setValue(password)
        await this.notARobotVer.click({ x: 30, y: 30 })
        await browser.pause(30000)  //paused for reCAPTCHA - click through manually if needed
        await this.loginConfirmBtn.click()
    }

    async verifyPasswordErrorMessage () {
        await this.isElementEqualToExpected($('p[class="css-1n7jhhc"]'),
        'The password you entered is incorrect. Please try again. ')
    }
}

module.exports = LoginErrorPageObject