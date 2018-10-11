// const path= require('path')
//
//
// module.exports={
//     entry: path.resolve(__dirname,'src/index.js'),
//     output: {
//         filename: "bundle.js",
//         path: path.resolve(__dirname,'dist')
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.vue$/,
//                 loader: "vue-loader"
//             }
//         ]
//     }
// }

const path = require('path');
const {VueLoaderPlugin}=require('vue-loader');

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),   //webpack4官方绝对路径
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [                                  //use可以接收数组
                    'vue-style-loader',                //可以不要
                    'style-loader',
                    'css-loader'
                ]
            },
            {                                           //css预处理器
                test:/\.styl/,                          //styl是stylus
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },

            {
            test: /\.(gif|jpg|jpeg|png|svg)$/,
            use:[
                {
                    loader:'url-loader',
                    options:{
                        limit:1024,
                        name:'[name]-aaa.[ext]'
                    }
            }
           ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
};
