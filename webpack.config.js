const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: "./src/js/index.js",
  //자바스크립트의 진입점을 뜻함
  output: {
    filename: "bundle.js",
    //번들될 파일을 지정
    path: path.resolve(__dirname, "./dist"),
    //번들될 파일이 생성될 경로
    clean: true,
    //파일이 이미 있다면 새로 생성함
  },
  //번들파일 관련 속성
  devtool: 'source-map',
  //빌드한 파일과 원본파일을 연결해주는 기능
  mode: "development",
  //기본으로 프로덕션과 디벨롭이 있는데 html,css난독화기능을 제공하는지의 차이가 있다.
  //추가적인 압축플러그인을 사용할 것
  devServer:{
    //개발할때 사용하는 devServer관련 설정
    host:"localhost",
    port:8080,
    open:true,
    watchFiles: 'index.html'
    //index.html이 바뀔때마다 reload를 해주어라
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "keyboard",
      //html에서 title태그와 같은 기능
      template: "./index.html",
      //index.html을 사용할 것이다.
      inject: "body",
      //번들했을때 js파일을 haed에 넣을것이냐 body에 넣을것이냐 선택
      favicon:"./favicon.ico"
      //favicon을 파비콘으로 사용하겠다.
    }),
    new MiniCssExtractPlugin({filename:"style.css"})
    //html에 css를 inject 하기 위해 사용한다.

  ],
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
        //.css파일을 이런 loader를 통해 읽어들이겠다 라는 뜻
      }
    ]
  },
  optimization:{
    //추가 압축플러그인
    minimizer:[
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  }
}