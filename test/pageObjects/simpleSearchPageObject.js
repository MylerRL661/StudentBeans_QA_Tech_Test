const ParentPageObject = require("./parentPageObject");

class SimpleSearchPageObject extends ParentPageObject {
  get searchBarBtn () {
    return $('button[data-testid=nav-search-desktop]')
  }

  get acceptCookieBtn () {
    return $('#onetrust-accept-btn-handler')
  }

  get searchBar () {
    return $('input[type="search"]')
  }

  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Recommended For You'),
      'Recommended For You')
  }

  async openSearchPage() {
    await this.acceptCookieBtn.click();
    await this.searchBarBtn.click();
  }

  async verifySearchPage () {
    await this.isElementEqualToExpected($('h3=Promoted Offers'),
    'Promoted Offers')
  }

  async searchFunction (searchTerm) {
    await this.searchBar.click()
    await this.searchBar.setValue(searchTerm)
    await this.isElementEqualToExpected($('h3=Student Discounts'), 
    'Student Discounts')
  }

  async selectFourthOption () {
    const results = $$('a[data-testid="search-result-offer"]')
    await results[3].click()
    await this.isElementEqualToExpected($('h3=About this student discount'), 
    'About this student discount')
  }
}

module.exports = SimpleSearchPageObject
