module.exports = {
    "plugins": {
        "autoprefixer": {},
        "postcss-px-to-viewport": { // 把px单位转换为vw vh vmin vmax单位
            viewportWidth: 375, // (Number) The width of the viewport.
            viewportHeight: 1334, // (Number) The height of the viewport.
            unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 指定无法整出保留的小数位数
            viewportUnit: 'vw', // (String) Expected units. 指定转换的单位 vw 那还有其他选择？
            selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 拥有这些样式前缀的不会被转换
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 最小转换单位
            mediaQuery: false // (Boolean) Allow px to be converted in media queries. 是否允许媒体查询使用
        },
    }
}