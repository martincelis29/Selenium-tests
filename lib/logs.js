const fs = require("fs");
const path = require("path");

async function logError(error, driver) {
  try {
    const date = new Date().toISOString().replace(/:/g, "-");
    const logName = `error_${date}.json`;
    const logPath = path.join(__dirname, "..", "logs", logName);

    const capabilities = await driver.getCapabilities();
    const browserName = capabilities.get("browserName");

    const data = {
      date: date,
      os: process.platform,
      browser: browserName,
      errorMessage: error.message,
      stackTrace: error.stack,
    };

    fs.writeFileSync(logPath, JSON.stringify(data, null, 2));

    console.log(`Detalles del error: ${logPath}`);
  } catch (err) {
    console.error("Error al escribir en el archivo de log:", err);
  }
}

module.exports = logError;
