# 基于Ionic Cordova的App——**Friday Movie**

#### 目录介绍
```
├── README.md  // 介绍文档
├── config.xml  // ionic配置文件
├── package.json  // npm包管理文件
├── plugins  // cordova插件
├── resources  //资源目录
|  ├── README.md
|  ├── android
|  |  ├── icon
|  |  └── splash
|  ├── icon.png
|  ├── ios
|  |  ├── icon
|  |  └── splash
|  └── splash.png
├── src  // 源码目录
|  ├── app  // 程序入口
|  |  ├── app.component.ts  // 根组件
|  |  ├── app.html  
|  |  ├── app.module.ts  // 应用主module
|  |  ├── app.scss  // 全局样式-一些公用的CSS放这里，比如图标样式
|  |  └── main.ts  // 程序入口
|  ├── assets  // 静态资源目录
|  |  ├── icon
|  |  └── imgs
|  ├── index.html  // SPA页面
|  ├── pages  // 我们用到的所有页面都在这加
|  |  ├── MovieDetail  // 电影详情页
|  |  |  ├── movie-detail.html  //页面模版
|  |  |  ├── movie-detail.module.ts  // 该页面对应的ionic module
|  |  |  ├── movie-detail.scss  // 该页面的样式
|  |  |  └── movie-detail.ts  // 页面逻辑
|  |  ├── account  // 账户页
|  |  ├── home  // 首页 -- 已经写了一部分，可作参考
|  |  ├── hot  // 热点
|  |  ├── login  // 登录
|  |  ├── profile  // 个人主页
|  |  ├── resource  // 搜索资源
|  |  ├── setting  // 设置
|  |  ├── signup  // 注册
|  |  └── tabs  // 主tabs
|  ├── providers  //  请求相关的service统一放在这里
|  |  ├── comments  // 影评请求的目录
|  |  └── movies  // 电影请求的目录
|  └── theme  // 主题 可已定义不同的样式-第一版不考虑
|     └── variables.scss
```

#### 启动

```
npm install // 若安装缓慢可使用cnpm
ionic serve // 浏览器内启动
ionic cordova emulate ios // 模拟器内启动（需要安装xcode）
ionic cordova emulate android // 安卓启动（貌似需要安装Android SDK，目前我木有装，这个需要doing帮忙下）
```

#### 参考资料
* ionic3使用Angular2，参考：https://angular.io/guide/quickstart
* ionic可以使用的组件参考手册：https://ionicframework.com/docs/
* 哦对了，这个使用的是TypeScript，对象化的js，可以先看一下：https://www.tslang.cn/docs/home.html

#### 注意
* 开发时请在feature分支
