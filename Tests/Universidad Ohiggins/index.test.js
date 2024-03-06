const { getDriver } = require("../../lib/webdriver.js");
const { runTest, captureLogs } = require("../../lib/utils.js");
const Test_Inicio_De_Sesion_Correcto = require("./Iniciar Sesion (Correcto).js");
const Test_Inicio_De_Sesion_Incorrecto = require("./Iniciar Sesion (Incorrecto).js");
const Test_Navegación_Por_Interfaz = require("./Navegacion Por Interfaz.js");

describe("Universidad OHiggins", () => {
  const url = "https://estudiantes-uoh.tipddy.cl/";
  let driver;

  beforeEach(async () => {
    driver = getDriver("chrome-headless-normal");
    await driver.manage().setTimeouts({ implicit: 10000 });
  });
  afterEach(async () => {
    if (driver) {
      await captureLogs(driver);
      await driver.quit();
    }
  });

  it("Inicio de Sesion (Correcto)", async () => {
    await runTest(() => Test_Inicio_De_Sesion_Correcto(url, driver));
  }, 30000);

  it("Inicio de Sesion (Incorrecto)", async () => {
    await runTest(() => Test_Inicio_De_Sesion_Incorrecto(url, driver));
  }, 30000);

  it("Navegación Por Interfaz", async () => {
    await runTest(() => Test_Navegación_Por_Interfaz(url, driver));
  }, 30000);
});
