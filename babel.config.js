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
            "@/controllers": "./src/controllers",
            "@/models": "./src/models",
            "@/services": "./src/services",
            "@/views": "./src/views",
            "@/types": "./src/types",
            "@/atomic/element": "./src/atomic/element",
            "@/atomic/component": "./src/atomic/component",
            "@/atomic/design": "./src/atomic/design",
            "@/hooks": "./src/hooks",
            "@/validation": "./src/validation",
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
