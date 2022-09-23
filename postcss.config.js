/**
 * 下载依赖
 * npm install postcss-px-to-viewport --save-dev
 *
 * 配置注意事项
 * 1.propList: 当有些属性的单位我们不希望转换的时候，可以添加在数组后面，并在前面加上!号，如propList: ["*","!letter-spacing"]
 * 2.selectorBlackList：转换的黑名单，在黑名单里面的我们可以写入字符串，只要类名包含有这个字符串，就不会被匹配。
 *   比如selectorBlackList: [‘wrap’],它表示形如wrap,my-wrap,wrapper这样的类名的单位，都不会被转换
 *
 * UI库的兼容问题(例vant)
 * const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 375 : 750;
 * viewportWidth: designWidth
 */
// module.exports = {
//     plugins: {
//         autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
//         "postcss-px-to-viewport": {
//             unitToConvert: "px", // 要转化的单位
//             viewportWidth: 750, // UI设计稿的宽度
//             unitPrecision: 6, // 转换后的精度，即小数点位数
//             propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
//             viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
//             fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
//             selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
//             minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
//             mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
//             replace: true, // 是否转换后直接更换属性值
//             exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
//             landscape: false // 是否处理横屏情况
//         }
//     }
// };