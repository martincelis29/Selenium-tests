const assert = require("assert");
const { By } = require("selenium-webdriver");

async function Test_Verificar_Imagenes_Home(url, driver) {
  await driver.get(url);
  const xpaths = [
    `//img[@src='${url}wp-content/themes/tipddy/images/logo-tipddy.png']`,
    "(//img[@alt='...'])[2]",
    "(//img[@alt='...'])[3]",
    "//img[@alt='link hacia formulario de contacto']",
    "(//img[@alt='...'])[4]",
    "(//img[@alt='...'])[5]",
    "(//img[@alt='...'])[7]",
    "(//img[@alt='...'])[8]",
    "(//img[@alt='...'])[9]",
    "(//img[@alt='...'])[10]",
    "(//img[@alt='...'])[11]",
    "(//img[@alt='...'])[12]",
    "(//img[@alt='...'])[13]",
    "(//img[@alt='...'])[14]",
    "(//img[@alt='...'])[15]",
    "(//img[@alt='...'])[16]",
    "(//img[@alt='...'])[17]",
    "(//img[@alt='...'])[27]",
    "(//img[@alt='...'])[28]",
    "(//img[@alt='...'])[29]",
    "(//img[@alt='...'])[30]",
    "(//img[@alt='...'])[31]",
    "(//img[@alt='...'])[32]",
    "(//img[@alt='...'])[33]",
    "(//img[@alt='...'])[34]",
    "(//img[@alt='...'])[35]",
    "(//img[@alt='...'])[36]",
    "(//img[@alt='...'])[37]",
    "(//img[@alt='...'])[38]",
    "(//img[@alt='...'])[39]",
    "(//img[@alt='...'])[40]",
    "(//img[@alt='...'])[44]",
  ];

  for (const xpath of xpaths) {
    const elements = await driver.findElements(By.xpath(xpath));
    assert(elements.length, `No se encontro elemento para el xpath: ${xpath}`);
  }
}

module.exports = Test_Verificar_Imagenes_Home;
