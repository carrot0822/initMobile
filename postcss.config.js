module.exports = {

    "plugins": {
        //"postcss-import": {}, // 解决@import css的问题
        //"postcss-url": {}, // 处理文件 图片 字体引用路径的问题 require
        //"postcss-aspect-ratio-mini": {}, // 用于处理元素容器宽高比  有丶难用
        //"postcss-cssnext": {}, // 可以使用css未来特性 自动处理兼容问题
        //"postcss-viewport-units": {}, // 添加content属性？ 用处emm
        "postcss-write-svg": { // 处理移动端1px像素边框的问题 background-image方案 没懂
            utf8: false
        },
        "postcss-px-to-viewport": { // 把px单位转换为vw vh vmin vmax单位
            viewportWidth: 375, // (Number) The width of the viewport.
            viewportHeight: 1334, // (Number) The height of the viewport.
            unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 指定无法整出保留的小数位数
            viewportUnit: 'vw', // (String) Expected units. 指定转换的单位 vw 那还有其他选择？
            selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 拥有这些样式前缀的不会被转换
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 最小转换单位
            mediaQuery: false // (Boolean) Allow px to be converted in media queries. 是否允许媒体查询使用
        },
        /*
        "cssnano": { // 自动压缩和清理css代码
            preset: "advanced",
            autoprefixer: false,
            "postcss-zindex": false //开启后z-index会被重置为1
    
        },*/
        //"autoprefixer": {},
    }
    
}