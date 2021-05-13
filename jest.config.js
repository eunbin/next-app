module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    // path alias setting
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^src/(.*)': '<rootDir>/src/$1',
    '^layout/(.*)': '<rootDir>/src/layout/$1',
    '^components/(.*)': '<rootDir>/src/components/$1',
  },
};
