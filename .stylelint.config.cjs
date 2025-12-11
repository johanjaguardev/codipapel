module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order', 'stylelint-selector-bem-pattern'],
  rules: {
    /* Orden alfabético de propiedades */
    'order/properties-alphabetical-order': true,

    /* BEM estricto */
    'plugin/selector-bem-pattern': {
      preset: 'bem',
      componentName: '[A-Z]+', // Bloques en PascalCase o CamelCase
      componentSelectors: {
        initial: '^\\.{{componentName}}(?:__[-a-z]+)?(?:--[-a-z]+){0,2}$',
      },
      utilitySelectors: '^\\.u-[a-z]+$',
    },

    /* SCSS recomendado */
    'scss/at-rule-no-unknown': true,
    'selector-class-pattern': '^[a-z0-9\\-]+$',
  },
};
