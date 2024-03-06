const { By, until } = require("selenium-webdriver");

async function Test_Navegacion_Por_Paginas_Botones(url, driver) {
  await driver.get(url);
  await driver.findElement(By.xpath("//label")).click();
  await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Nuestro Sistema')]")));
  await driver.findElement(By.xpath("//a[contains(text(),'Nuestro Sistema')]")).click();
  await driver.findElement(By.xpath("//label")).click();
  await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Servicios Web')]")));
  await driver.findElement(By.xpath("//a[contains(text(),'Servicios Web')]")).click();
  await driver.findElement(By.xpath("//label")).click();
  await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Servicios Móvil')]")));
  await driver.findElement(By.xpath("//a[contains(text(),'Servicios Móvil')]")).click();
  await driver.findElement(By.xpath("//label")).click();
  await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Servicios Educación')]")));
  await driver.findElement(By.xpath("//a[contains(text(),'Servicios Educación')]")).click();
  await driver.findElement(By.xpath("//label")).click();
  await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Servicios Empresariales')]")));
  await driver.findElement(By.xpath("//a[contains(text(),'Servicios Empresariales')]")).click();
}

module.exports = Test_Navegacion_Por_Paginas_Botones;
