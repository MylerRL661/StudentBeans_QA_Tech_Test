const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
})

Given('I open the search bar', async () => {
  await simpleSearchPageObject.openSearchPage()
  await simpleSearchPageObject.verifySearchPage()
})

When('I enter "Samsung"', async () => {
  await simpleSearchPageObject.searchFunction("Samsung")
})

Then('I should select the 4th "Samsung" search listing', async () => {
  await simpleSearchPageObject.selectFourthOption();
})
