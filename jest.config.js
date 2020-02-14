module.exports = {
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],
  testTimeout: 10000,
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
