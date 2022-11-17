const { Given, When, Then } = require('@cucumber/cucumber')
const LoginErrorPageObject = require('../pageObjects/loginErrorPageObject')

const loginErrorPageObject = new LoginErrorPageObject()

const testData = {
    email: 'test@test.com',
    password: 'testingStuff'
}

Given('I open studentbeans.com', async () => {
  await loginErrorPageObject.goToHomePage()
  await loginErrorPageObject.verifyHomePage()
})

Given('I select the login page', async () => {
    await loginErrorPageObject.openLogin()
})

When('I enter the login credentials', async () => {
    await loginErrorPageObject.enterCredentials(testData.email, testData.password)
})

Then('An error will be present', async () => {
    await loginErrorPageObject.verifyPasswordErrorMessage()
})