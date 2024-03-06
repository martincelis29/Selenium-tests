const { By, until, Key } = require("selenium-webdriver");
const assert = require("assert");
const { runWithRetry } = require("../../lib/utils.js");

async function Test_Inicio_De_Sesion_Incorrecto(url, driver) {
  await driver.get(url);

  await runWithRetry(async () => {
    await driver.findElement(By.name("username")).sendKeys("martinqa");
    await driver.findElement(By.name("password")).sendKeys("martinqa", Key.RETURN);
  });

  const mensaje = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div[3]/div/p")));
  await driver.wait(until.elementTextMatches(mensaje, /\S/));
  const value = await mensaje.getText();
  assert.equal("Acceso inválido", value);
}

module.exports = Test_Inicio_De_Sesion_Incorrecto;
