module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFiles: [
    'dotenv/config',
    'regenerator-runtime/runtime',
  ],
  setupFilesAfterEnv:
  [
    '<rootDir>/src/utils/jestSetupUtil.js',
  ],
};
