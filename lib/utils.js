const { logging } = require("selenium-webdriver");
const { addMsg } = require("jest-html-reporters/helper");

//* Función para ejecutar un test
async function runTest(test) {
  try {
    await test();
  } catch (err) {
    throw new Error(err);
  }
}

//* Función para obtener los logs del navegador al terminar un test
async function captureLogs(driver) {
  await driver
    .manage()
    .logs()
    .get(logging.Type.BROWSER)
    .then((entries) => {
      if (entries.length > 0) {
        return addMsg({ message: { logs: entries } });
      } else {
        return addMsg({ message: { logs: "No hay Logs" } });
      }
    });
}

//* Función para ejecutar la acción con reintento
async function runWithRetry(action) {
  let count = 0;
  let error;

  while (count < 3) {
    try {
      await action();
      break;
    } catch (err) {
      error = err;
      count++;
      addMsg({ message: { intentos: `Intento ${count}. Error: ${err}` } });
      // console.error(`Intento ${count}. Error: ${err}`);
    }
  }

  if (count === 3) {
    throw new Error(`Número máximo de intentos alcanzado. Error: ${error}`);
  }
}

module.exports = { runTest, captureLogs, runWithRetry };
