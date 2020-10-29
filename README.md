
vuepress
vue-router版本应为3.4.5 [https://github.com/vuejs/vuepress/issues/2656]()

core-js问题 [https://github.com/vuejs/vuepress/issues/2275]()
修改\node_modules\@vuepress\core\lib\node\webpack\createBaseConfig.js
333行
```js
   return module.paths.concat([path.resolve(process.cwd(), 'node_modules'), 'node_modules'])
   // return module.paths.concat([path.resolve(process.cwd(), 'node_modules')])
```

