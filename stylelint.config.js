module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-order'],
    rules: {
      'color-hex-length': 'short',
      'selector-class-pattern': '^[a-z][a-zA-Z0-9_-]+$',
      'property-no-vendor-prefix': true,
      'block-no-empty': true,
      'max-nesting-depth': 3,
      'order/properties-alphabetical-order': true,
      'no-duplicate-selectors': true
    }
  };