// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Login SSO', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  async function waitForWindow(timeout = 2) {
    await driver.sleep(timeout)
    const handlesThen = vars["windowHandles"]
    const handlesNow = await driver.getAllWindowHandles()
    if (handlesNow.length > handlesThen.length) {
      return handlesNow.find(handle => (!handlesThen.includes(handle)))
    }
    throw new Error("New window did not appear before timeout")
  }
  it('Login SSO', async function() {
    // Test name: Login SSO
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("http://localhost:3000/")
    // 2 | setWindowSize | 1630x1320 | 
    await driver.manage().window().setRect({ width: 1630, height: 1320 })
    // 3 | click | css=.MuiSvgIcon-fontSizeLarge | 
    await driver.findElement(By.css(".MuiSvgIcon-fontSizeLarge")).click()
    // 4 | click | xpath=//div[@id='menu-appbar']/div[3]/ul/li/a | 
    await driver.findElement(By.xpath("//div[@id=\'menu-appbar\']/div[3]/ul/li/a")).click()
    // 5 | click | css=div > svg | 
    vars["windowHandles"] = await driver.getAllWindowHandles()
    // 6 | storeWindowHandle | root | 
    await driver.findElement(By.css("div > svg")).click()
    // 7 | selectWindow | handle=${win6585} | 
    vars["win6585"] = await waitForWindow(2000)
  })
})