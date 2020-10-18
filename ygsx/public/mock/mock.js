// commonjs的模块化
// json-server的配置文件
// 引入所有需要模拟的mock数据
const swiper = require( './fruit-swiper.json')
const menu = require( './fruit-menu.json')
const first = require( './fruit-firstlist.json')
const meat = require( './fruit-meatlist.json')
const third = require( './fruit-thirdlist.json')


// 导出
module.exports = ()=>({
    swiper,
    menu,
    first,
    meat,
    third
})