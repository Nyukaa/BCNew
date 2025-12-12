const path = require("path");
const webpack = require("webpack");

const config = (env, argv) => {
  console.log("argv.mode:", argv.mode); //argv.mode показывает текущий режим сборки
  const backend_url =
    argv.mode === "production"
      ? "https://notes2023.fly.dev/api/notes"
      : "http://localhost:3001/notes";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"), //path.resolve — приводит путь к абсолютному
      // __dirname — переменная Node.js, содержащая текущую директорию
      filename: "main.js",
    },
    devServer: {
      static: path.resolve(__dirname, "build"), //путь к папке с собранными файлами
      compress: true, //включение gzip-сжатия.
      port: 3000,
    },
    devtool: "source-map", // ✅ включаем source maps для отладки DevTools показывает реальные строчки кода
    module: {
      rules: [
        {
          test: /\.js$/, // этот loader применяется к файлам с расширением .js
          loader: "babel-loader", // используем babel-loader для транспайлинга
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // пресет для React/JSX — группы заранее настроенных плагинов.
            //Процесс преобразования кода из одной формы JavaScript в другую называется транспайлингом.
            //@babel/preset-env  код превращается в «старомодный» JavaScript большинство браузеров не поддерживают последние возможности ES6 и ES7, поэтому код обычно транспайлится в версию JavaScript, совместимую со стандартом ES5.
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          //css-loader — читает содержимое CSS-файлов и превращает их в JS-модули.
          //style-loader — создаёт <style> элемент в HTML и вставляет туда CSS, чтобы стили применялись на странице.
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(backend_url), //определяем глобальную константу BACKEND_URL
      }),
    ],
  };
};
// Alternative way to define the config as object
// const config = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "build"),
//     filename: "main.js",
//   },
// };
module.exports = config;
