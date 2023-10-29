module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@/types": "./src/types",
            "@/hooks": "./src/hooks",
            "@/views": "./src/views",
            "@/models": "./src/models",
            "@/services": "./src/services",
            "@/constants": "./src/constants",
            "@/validation": "./src/validation",
            "@/controllers": "./src/controllers",
            "@/atomic/design": "./src/atomic/design",
            "@/atomic/element": "./src/atomic/element",
            "@/atomic/component": "./src/atomic/component",
          },
        },
      ],
      ["nativewind/babel"],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
