const {Builder, By, Capabilities} = require('selenium-webdriver');
const chromeCapabilities = Capabilities.chrome();
const assert = require('assert')

async function TC_001(){
    chromeCapabilities.set('chromeOptions', {args: ['--headless']});
    let driver = await new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();

    await driver.get('http://digitalbooking.xyz/');
    await driver.manage().window().maximize();

    await driver.sleep(1000);

    await driver.findElement(By.className('button-register')).click();
    await driver.findElement(By.className('user-info-name')).sendKeys('Prueba');
    await driver.findElement(By.className('user-info-lastname')).sendKeys('Selenium II');
    await driver.findElement(By.className('user-info-field')).sendKeys('pruebaiiselenium@gmail.com');
    await driver.findElement(By.className('pass-input')).sendKeys('pruebaselenium');
    await driver.findElement(By.name('confirmPassword')).sendKeys('pruebaselenium');
    await driver.findElement(By.className("sign-up-button")).click();
    
    await driver.sleep(1000);

    let buttonTextCompare = await driver.findElement(By.className('sign-in-title')).getAttribute('value');
    assert.strictEqual(buttonTextCompare, "Iniciar sesión");

    await driver.sleep(1000);
    await driver.quit();
}

TC_001();