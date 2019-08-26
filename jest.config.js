module.exports = {
  rootDir: './',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/src/tests/setupTests.js',
    '<rootDir>/src/tests/propTypeError.js',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'css',
    'scss',
    'png',
    'svg',
    'jpeg',
    'jpg',
  ],
  testRegex: '.*\\.test\\.js',
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: [
    'node_modules',
  ],
  globals: {
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/tests/assetsTransformer.js',
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/tests/**',
    '!**/entries/**',
  ],
  coverageDirectory: 'src/tests/coverage',
};
