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
        hot:true,
        watchFiles:['./src/index.html']
    }
}