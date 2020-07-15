const { resolve } = require("core-js/fn/promise")

const isProduction = true
module.exports={
    // 配置alias别名
    chainWebpack: config =>{
        config.resolve.alias
        .set('@',resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
    },
    // 
    devServer:{
        open:true,
        https:false,
        hotOnly:false,
        proxy:''
    },
    // 全局引入三个scss样式文件
    
}