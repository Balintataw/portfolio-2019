const path = require('path');
const ignoreLoader = require('ignore-loader');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    publicPath: '/',
    runtimeCompiler: true,
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
    //         ], 
    //     }, 
    // },
    pwa: {
        name: 'Jossendal Development',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
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