// stylelint.config.cjs
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-scss'],
  plugins: ['stylelint-order'],
  rules: {
    // SCSS
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': [
      '^([a-z]+[a-z0-9-]*)(-[a-z0-9]+)*$',
      { message: 'Variables must use kebab-case.' }
    ],

    // BEM naming
    'selector-class-pattern': [
      '^[a-z]+(?:-[a-z0-9]+)*(?:__(?:[a-z0-9]+(?:-[a-z0-9]+)*))?(?:--(?:[a-z0-9]+(?:-[a-z0-9]+)*))?$',
      {
        message: 'Use BEM (block__element--modifier). Example: card__title--big'
      }
    ],

    // Propiedades ordenadas alfabéticamente
    'order/properties-alphabetical-order': true
  }
}
