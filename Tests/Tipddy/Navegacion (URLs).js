async function Test_Navegacion_Por_Paginas_URLs(url, driver) {
  await driver.get(url);
  await driver.get(url + "nuestro-sistema/");
  await driver.get(url + "servicios-web/");
  await driver.get(url + "servicios-movil/");
  await driver.get(url + "servicios-educacion/");
  await driver.get(url + "servicios-empresariales/");
}

module.exports = Test_Navegacion_Por_Paginas_URLs;
