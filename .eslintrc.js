module.exports = {
  extends: "airbnb-base",
  env: {
    jest: true,
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  plugins: ["jest", "wyze"],
  globals: {
    should: true,
    sinon: true
  },
  rules: {
    "no-mixed-spaces-and-tabs": "off",
    "no-console": "off",
    "id-blacklist": 0,
    "max-len": [
      2,
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true
      }
    ],
    semi: ["error", "never"],
    "space-in-parens": 0,
    "wyze/space-around-conditional": 2,
    "wyze/func-params-spacing": 0,
    "wyze/max-file-length": 2,
    "wyze/sort-imports": 2,
    "import/extensions": "off",
    "import/first": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": "off",
    "max-statements": ["error", 20],
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    "newline-before-return": "error",
    "arrow-parens": ["error", "as-needed"],
    "no-confusing-arrow": "off",
    "prefer-spread": "error",
    "template-curly-spacing": ["error", "never"],
    "array-bracket-spacing": ["error", "always", { objectsInArrays: false }],
    "comma-dangle": ["error", "always-multiline"],
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
    "no-throw-literal": "off",
    "no-return-await": "off",
    "prefer-rest-params": "off",
    "prefer-destructuring": "off",
    "no-use-before-define": "off"
  }
};
