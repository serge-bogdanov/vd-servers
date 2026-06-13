/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {

    /* Разрешаем БЭМ и kebab-case */
    "selector-class-pattern":
      "^([a-z][a-z0-9]*((__|--)[a-z0-9]+)*)|([a-z0-9-]+)$",

    /* Разрешаем вложенные селекторы (&) */
    "scss/selector-no-redundant-nesting-selector": true,

    /* Разрешаем @extend без %placeholder */
    "scss/at-extend-no-missing-placeholder": null,

    /* Разрешаем псевдоэлементы (включая ::ng-deep) */
    "selector-pseudo-element-no-unknown": [
      true,
      { ignorePseudoElements: ["ng-deep"] },
    ],

    /* Ограничиваем вложенность (4 уровня) */
    "max-nesting-depth": [
      4,
      { ignore: ["blockless-at-rules", "pseudo-classes"] },
    ],

    /* Разрешаем CSS- переменные (--var) */
    "property-no-unknown": [true, { ignoreProperties: ["/^--/"] }],

    /* Дополнительно: разрешаем псевдоклассы (например, :global) */
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global", "local", "export"] },
    ],
    /* Разрешает @charset "UTF-8" */
    "at-rule-no-unknown": [true, { ignoreAtRules: ["charset"] }]
  },
}
