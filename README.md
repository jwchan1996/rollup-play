# 学会 rollup 从零到一系列

- [01 快速上手](/01-quickly-start/)  
- [02 配置文件](/02-configuration-file/)  
- [03 使用插件](/03-plugins/)  
- [04 加载 npm 模块](/04-npm-module/)  
- [05 加载 CommonJS 模块](/05-commonjs/)  
- [06 代码拆分](/06-code-splitting/)  
- [07 多入口打包](/07-multi-entry/)  
- [08 尝试多种打包格式](/08-formats/)   

## 选用原则

rollup 的优点

- 输出结果更加扁平
- 自动移除未引用代码，也就是 tree-shaking
- 打包代码依然完全可读

rollup 的缺点

- 加载非 ESM 的第三方模块比较复杂
- 模块最终都打包都一个函数中，无法实现 HMR
- 浏览器环境中，代码拆分功能依赖 AMD 库

**总结**：rollup 不适合用来开发一些比较复杂的应用，适合用来开发一个框架或类库。