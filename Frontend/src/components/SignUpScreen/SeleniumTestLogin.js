const {Builder, By, Capabilities} = require('selenium-webdriver');
const chromeCapabilities = Capabilities.chrome();
const assert = require('assert')

async function TC_001(){
    chromeCapabilities.set('chromeOptions', {args: ['--headless']});
    let driver = await new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();

    await driver.get('http://digitalbooking.xyz/');
    await driver.manage().window().maximize();

    await driver.sleep(1000);

    await driver.findElement(By.className('button-login')).click();
    await driver.findElement(By.name('email')).sendKeys('pruebaselenium@gmail.com');
    await driver.findElement(By.name('password')).sendKeys('prueba123');
    await driver.findElement(By.className("sign-in-button")).click();
    
    await driver.sleep(1000);

    let buttonTextCompare = await driver.findElement(By.className('error-msg')).getAttribute('value');
    assert.strictEqual(buttonTextCompare, "Lamentablemente no ha podido iniciar sesión. Por favor, intente más tarde.");

    await driver.sleep(1000);
    await driver.quit();
}

TC_001();