module.exports = {
    silent: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    testTimeout: 30000,
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        "<rootDir>/node_modules"
    ],
};
