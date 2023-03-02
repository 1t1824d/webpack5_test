## 1.初始化生成package.json文件

```
npm init -y
```
项目目录：
```
webpack5_test
   --package.json
```
## 2.创建项目目录
 
 项目目录：

 ```
 webpack5_test
   --src
      --js
        --01.js
      --index.html
      --index.js
   --package.json
   --readme.md
   --webpack.config.js

  ```

## 3.安装webpack webpack-cli
 
 ```
 npm install webpack webpack-cli -S

 ```

 项目目录：

 ```
 webpack5_test
   --node_modules
   --src
      --js
        --01.js
      --index.html
      --index.js
   --package-lock.json
   --package.json
   --readme.md
   --webpack.config.js

  ```

  ## 4.安装html-webpack-plugin

  ```
  npm install html-webpack-plugin -S 
  ```

  ## 5.安装webpack-dev-server

  ```
  npm install webpack-dev-server -S 
  ```
   在package.json文件配置

   ```
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "serve":"webpack-dev-server --open"
  },
  ```

  ## 6.webpack.config.js配置

  ```
  const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:__dirname+'/public',
        filename:'./js/[name].[hash:8].bundle.js',
        clean:true
    },
    mode:"development",
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'./index.html',
            inject:"body"
        })
    ],
    module:{

    },
    devServer:{
        open:true,
        hot:true
    }
}
```