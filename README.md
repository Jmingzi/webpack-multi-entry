# webpack-multi-entry
webpack多入口文件脚手架

打包命令
```yaml
// 测试及启动服务
npm run dev

// 打包压缩
npm run build
```

多入口项目src目录必须保证有以下类似结构：
```
├─template
│      admin.html
│      index.html
│
└─views
    ├─admin
    │      index.js
    │
    └─index
            index.js
```

也就是说template文件夹下的模版文件，都一一对应views文件夹下的目录