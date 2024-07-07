const { resolve } = require("node:path");
const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project,
  },
  extends: [
    "eslint-config-next",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  plugins: ["tailwindcss", "import", "unused-imports"],
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
    },

    /**
     * 에러때문에 추가
     * dehydrate not found in '@tanstack/react-query' import/named
     * @see https://github.com/TanStack/query/issues/6186 (버전업해도 해결되지않았음)
     */
    "import/ignore": ["node_modules", ".next"],
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "postcss.config.js",
    "next.config.js",
  ],

  /** ------------------------------------------------------------------------------
   * 
   * rules start
   * 
   ------------------------------------------------------------------------------ */
  rules: {
    // "import/no-default-export": "off", 왜있는지 모르겠음 (turbo 초기 규칙)

    // import order: next -> react -> external -> internal -> css import
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "next*",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "react*",
            group: "builtin",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
        },
        /**
         * css import를 최하단으로 내리지 않으면 에러
         * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#warnonunassignedimports-truefalse
         */
        warnOnUnassignedImports: true,
      },
    ],

    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    // tailwind
    "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/classnames-order": [
      "warn",
      { callees: ["classNames", "classnames", "clsx", "ctl", "cva", "tv"] },
    ],
    "tailwindcss/enforces-shorthand": [
      "warn",
      {
        callees: ["classNames"],
      },
    ],
  },
};
