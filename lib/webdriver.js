const { platform } = require("node:process");
const { Builder, logging } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
const safari = require("selenium-webdriver/safari");
require("chromedriver");
require("geckodriver");

function getDriver(browserName) {
  let driver;
  let chromeOptions;
  let firefoxOptions;
  let safariOptions;

  //* Console Logs Prefs
  // Logging API not supported in IE.
  // Logging API not supported in Marionette.
  // Logging API not supported in Safari.
  const prefs = new logging.Preferences();
  prefs.setLevel(logging.Type.BROWSER, logging.Level.ALL);

  switch (browserName.toLowerCase()) {
    case "chrome":
      chromeOptions = new chrome.Options().addArguments("--incognito");
      driver = new Builder().forBrowser("chrome").setChromeOptions(chromeOptions).setLoggingPrefs(prefs).build();
      break;

    case "chrome-headless-normal":
      chromeOptions = new chrome.Options().addArguments("--headless=new --incognito").setPageLoadStrategy("normal");
      driver = new Builder().forBrowser("chrome").setChromeOptions(chromeOptions).setLoggingPrefs(prefs).build();
      break;

    case "chrome-headless-eager":
      chromeOptions = new chrome.Options().addArguments("--headless=new --incognito").setPageLoadStrategy("eager");
      driver = new Builder().forBrowser("chrome").setChromeOptions(chromeOptions).setLoggingPrefs(prefs).build();
      break;

    case "chrome-server":
      chromeOptions = new chrome.Options().addArguments("--incognito");
      driver = new Builder()
        .forBrowser("chrome")
        .setChromeOptions(chromeOptions)
        .setLoggingPrefs(prefs)
        .usingServer("http://localhost:4444/")
        .build();
      break;

    //TODO Se tiene que configurar y testear
    case "firefox":
      firefoxOptions = new firefox.Options().enableBidi();
      driver = new Builder().forBrowser("firefox").setFirefoxOptions(firefoxOptions).build();
      break;

    case "firefox-server":
      firefoxOptions = new firefox.Options().enableBidi();
      driver = new Builder().forBrowser("firefox").setFirefoxOptions(firefoxOptions).build();
      break;

    //TODO Se tiene que configurar y testear en Mac
    case "safari":
      if (platform === "darwin") {
        safariOptions = new safari.Options();
        driver = new Builder().forBrowser("safari").setSafariOptions(safariOptions).build();
      } else {
        throw new Error("Safari solo esta disponible  en macOS (darwin).");
      }
      break;

    default:
      throw new Error("El navegador ingresado no existe");
  }

  //* Ajustes de conexion
  // driver.setNetworkConditions({
  //   offline: false,
  //   latency: 10,
  //   download_throughput: 200,
  //   upload_throughput: 200,
  // });

  return driver;
}

module.exports = { getDriver };
