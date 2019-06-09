const path = require('path');
const ignoreLoader = require('ignore-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    publicPath: '/',
    runtimeCompiler: true,
    configureWebpack: { 
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
    //         ], 
    //     }, 
        plugins: [    
            new HtmlWebpackPlugin ({
                inject: true,
                // index.prod.html has scripts for auto-initializing firebase that dont run in development env
                template: `${process.env.NODE_ENV === 'production' ? 'public/index.prod.html' : 'public/index.html'}`
            })
        ]
    },
    pwa: {
        name: 'Jossendal Development',
        themeColor: '#fd7752',
        msTileColor: '#222222',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          // swSrc is required in InjectManifest mode.
          swSrc: 'src/service-worker.js',
          // ...other Workbox options...
        },
    },
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