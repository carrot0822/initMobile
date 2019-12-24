### 依赖
#### 工具类
+ sass配置
+ babel或者其他转格式的
+ postcss修正  3.0与2.0的方法配置不同 是否还可以按照.postcssrs来配置 也没有.babelrc

###### vue支持postcss/sass各种输入源的原因 
+ postcss-load-config vue的内部大概是默认配置了这些插件 我们可以直接使用 
+ sass-scss也一样 默认加载了一些引擎 

#### 开发类
+ Vue全家桶
+ axios
+ vant/ UI框架 √
    
    如何配置 暂时弃用flexble 先配置完再去看原理
    vh-vw是可以使用的 但是需要注意的是有赞用的是375px的设计稿做出来的 转化的话 要设置为375
    flexb + rem适配是第二种 这种就简单一些 1px问题能解决 不过据说有bug 放两个版本吧      
+ 手势库// 大概


#### bug类
+ 1px问题：css中1px不等于移动设备的1px 会根据DPR的不同进行相应的放大
    + 暂时用postcss-write-svg 使用scss的方式来解决 mixin里也有解决小bug的防范
+ 手势库
+ 300ms点击延迟

#### 适配的解决
1. vh和vw解决方案 目前最佳
2. flexble和rem 因为被废弃了 但是兼容老旧的也不是不行 viewPoint的改动似乎会有一些问题
#### 移动端基础知识类