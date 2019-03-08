const path = require('path');
const ignoreLoader = require('ignore-loader');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    publicPath: '/',
    // configureWebpack: { 
    //     resolve: {
    //         alias: {
    //             // 'vue$': 'vue/dist/vue.esm.js',
    //             '@': resolve('src'),
    //           }
    //     },
    //     module: { 
    //         rules: [
    //             { 
    //                 test: /\.vue$/,
    //                 resourceQuery: /blockType=notes/,
    //                 loader: require('ignore-loader') 
    //             }
    //         ] 
    //     } 
    // },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, 'src'));
        // config.module
        //     .rule('ignore')
        //     .test(/\.vue$/)
        //     .use('vue-loader')
        //     .loader('ignore-loader')
        //     .options(/blockType=notes/)
    },
}


// module.exports = {
//     publicPath: '/',
//     chainWebpack: (config) => {
//         config.resolve.alias
//             .set('@', path.resolve(__dirname, 'src'));
//         config.module
//             .rule('ignore')
//             .test(/\.vue$/)
//             .use('ignore-loader')
//             .loader(ignoreLoader)
//     },
// }