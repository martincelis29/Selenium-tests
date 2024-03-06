const { getDriver } = require("../../lib/webdriver.js");
const { runTest, captureLogs } = require("../../lib/utils.js");
const Test_Navegacion_Por_Paginas_URLs = require("./Navegacion (URLs).js");
const Test_Navegacion_Por_Paginas_Botones = require("./Navegacion (Botones).js");
const Test_Verificar_Imagenes_Home = require("./Verificar Imagenes (Home).js");

describe("Tipddy", () => {
  const url = "https://www.tipddy.cl/";
  let driver;

  describe("Chrome", () => {
    beforeEach(async () => {
      driver = getDriver("chrome-server");
      await driver.manage().setTimeouts({ implicit: 10000 });
    });
    afterEach(async () => {
      if (driver) {
        await captureLogs(driver);
        await driver.quit();
      }
    });

    it("Navegación por páginas (Botones)", async () => {
      await runTest(() => Test_Navegacion_Por_Paginas_Botones(url, driver));
    }, 20000);

    it("Navegación por páginas (URLs)", async () => {
      await runTest(() => Test_Navegacion_Por_Paginas_URLs(url, driver));
    }, 20000);

    it("Verificar Imagenes (Home)", async () => {
      await runTest(() => Test_Verificar_Imagenes_Home(url, driver));
    }, 20000);
  });

  describe("Firefox", () => {
    beforeEach(async () => {
      driver = getDriver("firefox-server");
      await driver.manage().setTimeouts({ implicit: 10000 });
    });
    afterEach(async () => {
      if (driver) {
        await driver.quit();
      }
    });

    it("Navegación por páginas (Botones)", async () => {
      await runTest(() => Test_Navegacion_Por_Paginas_Botones(url, driver));
    }, 20000);

    it("Navegación por páginas (URLs)", async () => {
      await runTest(() => Test_Navegacion_Por_Paginas_URLs(url, driver));
    }, 20000);

    it("Verificar Imagenes (Home)", async () => {
      await runTest(() => Test_Verificar_Imagenes_Home(url, driver));
    }, 20000);
  });
});
