var nodemon = require('nodemon'); //引入nodemon模块
/**
 * script 重启的脚本
 * ext 检测的文件类型
 * watch 监听哪些文件，文件夹，如果配置此字段，那么nodemon就会匹配当前字段下的文件
 * ignore 忽略哪些文件
 */
nodemon({
  script: './index.js',
  ignore:[],
  watch: [
    'api/',
    'index.js'
  ],
  ext: 'js json'
});

nodemon.on('start', function () {
  console.log('mockServer has started');
}).on('quit', function () {
  console.log('mockServer has quit');
  process.exit();
}).on('restart', function (files) {
  console.log('mockServer restarted due to: ', files);
});
