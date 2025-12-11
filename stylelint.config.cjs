module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order'
  ],
  rules: {
    // Necesario para permitir @use, @mixin, etc.
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    // Evitar errores con el plugin de orden
    'order/order': null,
    'order/properties-order': null
  }
}
