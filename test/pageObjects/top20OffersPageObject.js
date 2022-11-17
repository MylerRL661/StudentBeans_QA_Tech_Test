const ParentPageObject = require("./parentPageObject");

class Top20OffersPageObject extends ParentPageObject {

    get top20Btn () {
        return $('a[data-testid="nav-category-top-20-student-discounts"]')
    }

    get acceptCookieBtn () {
        return $('#onetrust-accept-btn-handler')
    }
    
    async goToHomePage () {
        await browser.url('')
      }
    
    async verifyHomePage () {
        await this.isElementEqualToExpected($('h2=Recommended For You'),
          'Recommended For You')
      }

    async selectTop20Btn () {
        await this.acceptCookieBtn.click()
        await this.top20Btn.click()
        await this.isElementEqualToExpected($('h1=Top 20 Student Discounts'),
        'TOP 20 STUDENT DISCOUNTS')
    }

    async selectSixthOffer () {
        const results = $$('article[itemprop="offers"]')
        await results[5].click()
    }

    async verifyOfferPage () {
        await this.isElementEqualToExpected($('h3=About this student discount'), 
    'About this student discount')
    }
}

module.exports = Top20OffersPageObject