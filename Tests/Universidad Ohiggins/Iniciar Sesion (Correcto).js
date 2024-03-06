const { By, until, Key } = require("selenium-webdriver");
const assert = require("assert");

async function Test_Inicio_De_Sesion_Correcto(url, driver) {
  await driver.get(url);
  await driver.wait(until.elementLocated(By.name("username")));
  await driver.findElement(By.name("username")).sendKeys("martinqa");
  await driver.findElement(By.name("password")).sendKeys("martinqa24", Key.RETURN);

  const mensaje = await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div[3]/div/p")));
  await driver.wait(until.elementTextMatches(mensaje, /\S/));
  const value = await mensaje.getText();

  // await driver
  //   .manage()
  //   .getCookies()
  //   .then(function (cookies) {
  //     console.log("cookie details => ", cookies);
  //   });
  assert.equal("Inicio de sesión exitoso", value);
}

module.exports = Test_Inicio_De_Sesion_Correcto;
