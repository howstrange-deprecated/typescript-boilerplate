//babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@config": "./src/core/configs",
          "@interface": "./src/database/interfaces",
          "@repository": "./src/database/repositories",
          "@schema": "./src/database/schemas",
          "@middleware": "./src/infra/middlewares",
          "@provider": "./src/shared/providers",
          "@route": "./src/infra/routes",
          "@service": "./src/infra/services",
          "@case": "./src/usecases",
          "@util": "./src/core/utils",
        },
      },
    ],
  ],
  ignore: [
    "**/*.spec.ts",
  ]
};
