module.exports = {
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "plugins": [
    "security"
  ],
  "extends": "eslint:recommended",
  "rules": {
    "accessor-pairs": "error",
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-callback-return": "off",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "block-scoped-var": "error",
    "block-spacing": "off",
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "callback-return": "off",
    "camelcase": "off",
    "capitalized-comments": "off",
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "comma-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "comma-style": "off",
    "complexity": "off",
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "consistent-return": "off",
    "consistent-this": "off",
    "curly": "error",
    "default-case": "off",
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": [
      "error",
      {
        "allowKeywords": true
      }
    ],
    "eol-last": "error",
    "eqeqeq": "error",
    "func-call-spacing": "error",
    "func-name-matching": "off",
    "func-names": "off",
    "func-style": "off",
    "generator-star-spacing": "off",
    "global-require": "off",
    "guard-for-in": "off",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-length": "off",
    "id-match": "error",
    "indent": "off",
    "init-declarations": "off",
    "key-spacing": "off",
    "keyword-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "line-comment-position": "off",
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": "off",
    "lines-around-directive": "off",
    "max-depth": "error",
    "max-len": "off",
    "max-lines": "off",
    "max-nested-callbacks": "error",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-ternary": "off",
    "new-cap": "off",
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "off",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-confusing-arrow": "off",
    "no-continue": "off",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "off",
    "no-empty-function": "off",
    "no-eq-null": "error",
    "no-eval": "off",
    "no-extend-native": "off",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": "off",
    "no-floating-decimal": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-inner-declarations": [
      "error",
      "functions"
    ],
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "off",
    "no-loop-func": "off",
    "no-magic-numbers": "off",
    "no-mixed-operators": "off",
    "no-mixed-requires": "off",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-native-reassign": "error",
    "no-negated-condition": "off",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": "error",
    "no-new": "off",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-path-concat": "error",
    "no-plusplus": "off",
    "no-process-env": "error",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-throw-literal": "off",
    "no-trailing-spaces": "error",
    "no-undef-init": "off",
    "no-undef": "error",
    "no-undefined": "off",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-use-before-define": "off",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "off",
    "no-useless-rename": "error",
    "no-useless-return": "off",
    "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
    "no-var": "off",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "object-property-newline": [
      "error",
      {
        "allowMultiplePropertiesPerLine": true
      }
    ],
    "object-shorthand": "off",
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "operator-assignment": [
      "error",
      "always"
    ],
    "operator-linebreak": [
      "error",
      "after"
    ],
    "padded-blocks": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "off",
    "prefer-destructuring": [
      "error",
      {
        "array": false,
        "object": false
      }
    ],
    "prefer-numeric-literals": "error",
    "prefer-reflect": "off",
    "prefer-rest-params": "off",
    "prefer-spread": "error",
    "prefer-template": "off",
    "quote-props": "off",
    "quotes": "off",
    "radix": "error",
    "require-await": "error",
    "require-yield": "off",
    "require-jsdoc": "off",
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "security/detect-unsafe-regex": "error",
    "security/detect-buffer-noassert": "error",
    "security/detect-child-process": "error",
    "security/detect-disable-mustache-escape": "error",
    "security/detect-eval-with-expression": "error",
    "security/detect-no-csrf-before-method-override": "error",
    "security/detect-non-literal-fs-filename": "warn",
    "security/detect-non-literal-regexp": "warn",
    "security/detect-non-literal-require": "error",
    "security/detect-object-injection": "warn",
    "security/detect-possible-timing-attacks": "warn",
    "security/detect-pseudoRandomBytes": "error",
    "semi": "error",
    "semi-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "sort-imports": "error",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "error",
    "space-before-function-paren": "off",
    "space-in-parens": "off",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "off",
    "strict": "off",
    "symbol-description": "error",
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "unicode-bom": [
      "error",
      "never"
    ],
    "valid-jsdoc": "off",
    "vars-on-top": "off",
    "wrap-regex": "off",
    "yield-star-spacing": "off",
    "yoda": [
      "error",
      "never"
    ]
  },
  "globals": {}
};
