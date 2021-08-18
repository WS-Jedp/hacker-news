module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: ["<rootDir>/config/tests.ts"],
    transform: {
        "^.+\\.ts(x)?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/))(test|spec)\\.ts(x)?$",
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ],
    moduleNameMapper: {
        "\\.(css|jpg|png|svg|jpeg|mp4)$": "<rootDir>/src/__tests__/mocks/filesMocks.js"
    }
}