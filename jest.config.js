module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.(js|ts|tsx)$": "ts-jest"
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json"
    ],
    "testMatch": [
      "**/src/**/*.test.+(ts|js)?(x)"
    ],
    "moduleNameMapper": {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    "collectCoverage": true,
    "coverageReporters": [
      "cobertura",
      "html"
    ],
    "reporters": [
        "default",
        [ "jest-junit", 
            {
                "suiteName": "jest tests",
                "outputDirectory": "./__tests__",
                "outputName": "ummary-jest-junit.xml"
            } 
    ]
      
    ],
    "coverageDirectory": "<rootDir>/__tests__",
    "coverageThreshold": {
      "global": {
        "branches": 40,
        "functions": 30,
        "lines": 40,
        "statements": 40
      }
    }
  }
  