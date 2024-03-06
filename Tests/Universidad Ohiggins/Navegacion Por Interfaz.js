const { By, until, Key } = require("selenium-webdriver");
const assert = require("assert");
const { runWithRetry } = require("../../lib/utils.js");

async function Test_Navegación_Por_Interfaz(url, driver) {
  await driver.get(url);

  await runWithRetry(async () => {
    await driver.findElement(By.name("username")).sendKeys("martinqa");
    await driver.findElement(By.name("password")).sendKeys("martinqa24", Key.RETURN);
  });

  const mensaje = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div[3]/div/p")));
  await driver.wait(until.elementTextMatches(mensaje, /\S/));
  const value = await mensaje.getText();
  assert.equal("Inicio de sesión exitoso", value);

  await runWithRetry(async () => {
    await driver.findElement(By.xpath("//div[@class='row']//div[1]//div[1]//p[1]//button[1]")).click();
  });
}

module.exports = Test_Navegación_Por_Interfaz;
