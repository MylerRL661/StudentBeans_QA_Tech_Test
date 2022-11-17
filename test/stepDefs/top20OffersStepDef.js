const { Given, When, Then } = require('@cucumber/cucumber')
const Top20OffersPageObject = require('../pageObjects/top20OffersPageObject')

const top20OffersPageObject = new Top20OffersPageObject()

Given('I am on the studentbeans homepage and select the top 20 offers', async () => {
  await top20OffersPageObject.goToHomePage()
  await top20OffersPageObject.verifyHomePage()
  await top20OffersPageObject.selectTop20Btn()
})

When('I select the 6th offer', async () => {
    await top20OffersPageObject.selectSixthOffer()
})

Then('I should have loaded onto the 6th offer page', async () => {
    await top20OffersPageObject.verifyOfferPage()
})