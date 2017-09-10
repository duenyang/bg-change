# bgChange    [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) [![Gemnasium](https://img.shields.io/gemnasium/mathiasbynens/he.svg)](https://github.com/duenyang/bgChange) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/duenyang/bgChange) [![npm](https://img.shields.io/npm/v/bgchange.svg)](https://github.com/duenyang/bgChange)

这是一个网页背景切换的插件，可以选择图片背景或者是颜色背景，支持CSS3的写法，目前已发布到npm，插件简单易用，欢迎大家提`issues`和`pull request`

## How to use?

```bash
npm install bgchange
```

或者

```javaScript
<script src="http://ow287wwrv.bkt.clouddn.com/plugin/bgChange.min.js"></script>
<script src="http://ow287wwrv.bkt.clouddn.com/plugin/bgChange.min.js.map"></script>
```

## 举个栗子

```JavaScript
import BgChange from './bgchange.js'
```

```JavaScript
//start
var bgchange = new BgChange({
  image: false, //	default: false
  colorList: [
    'rgba(78, 56, 32, .8)',
    'rgba(70, 30, 45, .8)',
    'rgba(78, 56, 32, .8)',
    'rgba(89, 100, 105, .8)'
  ]
}).start();

//	or

var bgchange = new BgChange({
  image: true, //	default: false
  imagesList: [
    'http://ow287wwrv.bkt.clouddn.com/1.jpg',
    'http://ow287wwrv.bkt.clouddn.com/2.jpg',
    'http://ow287wwrv.bkt.clouddn.com/3.jpg',
    'http://ow287wwrv.bkt.clouddn.com/4.jpg',
    'http://ow287wwrv.bkt.clouddn.com/5.jpg',
    'http://ow287wwrv.bkt.clouddn.com/6.jpg',
    'http://ow287wwrv.bkt.clouddn.com/7.jpg',
    'http://ow287wwrv.bkt.clouddn.com/8.jpg',
    'http://ow287wwrv.bkt.clouddn.com/9.jpg',
    'http://ow287wwrv.bkt.clouddn.com/10.jpg',
  ]
}).start();

//stop
bgchange.stop();
```

### Options
|    Property    |    Description   |   type   |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| duration       | 背景切换动画持续时间(s) | Number| 2 |
| interval       | 背景切换间隔时间(ms) | Number | 3000 |
| image  | 是否是图片背景模式 | Boolean | false |
| imagesList     | 图片列表 | Array | [] |
| colorList     | 颜色列表 | Array | [] |

>	目前1.0.0版本可自定义参数较少，后期会不断的迭代补充


也可将整个项目`clone`下来，里面包含了开发文件和构建好之后的文件，按照下面的方法运行(基于vue2.0)

## Build Setup

``` bash
# install dependencies(先安装依赖)
npm install

# serve with hot reload at localhost:8080(本地运行)
npm run dev

# build for production with minification(如果你有更好的优化方案，请修改后运行下面的方法再`pull request`)
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
