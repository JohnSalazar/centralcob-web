module.exports = {
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        "<rootDir>/src/test.ts"
    ],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!<rootDir>/src/assets/**',
        '!<rootDir>/src/environments/**',
        '!**/test/**',
        '<rootDir>/src/*.css',
        '!<rootDir>/src/main.ts',
        '!<rootDir>/src/polyfills.ts',
        '!<rootDir>/src/**/*.module.*'
    ],
    coverageDirectory: 'coverage',
    preset: 'jest-preset-angular',
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1'
    },
    globals: {
        "ts-jest": {
            tsconfig: "<rootDir>/tsconfig.spec.json",
            stringifyContentPathRegex: "\\.html$"
        }
    }
};