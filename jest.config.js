/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ["./Tests/**/*.js", "!/lib/*.js", "!**/node_modules/**", "!**/vendor/**"],
    maxWorkers: 4,
    testEnvironment: "allure-jest/node",
    reporters: [
      "default",
      [
        "jest-html-reporters",
        {
          pageTitle: "Tests",
          publicPath: "./reports",
          filename: "report.html",
          includeConsoleLog: true,
          failureMessageOnly: 0, // 0-always create report. 1-show failure test suites messages only in Report. 2-only create report when some test suites failed.
        },
      ],
    ],
  };
};
