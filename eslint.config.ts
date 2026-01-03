import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier";
import vuejsAccessibility from "eslint-plugin-vuejs-accessibility";

export default withNuxt({
  files: ["**/*.ts", "**/*.vue", "**/*.js", "**/*.mjs"],
  rules: {
    "vue/multi-word-component-names": "off",
  },
})
  .append({
    plugins: {
      "vuejs-accessibility": vuejsAccessibility,
    },
    rules: {
      ...vuejsAccessibility.configs.recommended.rules,
    },
  })
  .append(eslintConfigPrettier);
