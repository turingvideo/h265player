import babel from "rollup-plugin-babel";
export default {
  input: "./src/index.js",
  output: [
    {
      file: "./dist/h265.cjs.js",
      format: "cjs",
    },
    {
      file: "./dist/h265.esm.js",
      format: "esm",
    },
  ],
  // sourceMap: 'inline',
  plugins: [
    babel({
      exclude: "node_modules/**",
      babelrc: true,
      presets: [["@babel/env", { modules: false }]],
      runtimeHelpers: true,
    }),
  ],
};
