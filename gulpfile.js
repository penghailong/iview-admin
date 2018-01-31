const path = require('path')
const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const browerSync = require('browser-sync').create()
const server = path.resolve(__dirname,'mock')

//browser-sync配置，配置里启动nodemon任务
gulp.task('browser-sync', ['nodemon'], function() {
	browerSync.init(null,{
		proxy:"http://localhost:8080",
		port:8081
	});
});
//browser-sync监听文件
gulp.task('mock', ['browser-sync'], function(){
	gulp.watch(['./mock/db.js','./mock/**'],['bs-delay']);
});

//延时刷新
gulp.task('bs-delay',function(){
	setTimeout(function(){
		browerSync.reload();
	},1000);
});

//服务器重启
gulp.task('nodemon', function(cb) {
	//设置个变量来防止重复重启
	var started = false;
	var stream = nodemon({
		script: './mock/server.js',
		ext: 'js',//监听文件的后缀
		env:{
			'NODE_ENV': 'development'
		},
		watch:[server]//监听的路径
	});
	stream.on('start', function() {
		if(!started){
			console.log('server path is:' + server);
			cb();
			started = true;
			console.log('server restarted....');
		}
	}).on('crash', function(){
		console.error('application has crashed! ] \n')
		stream.emit('restart', 10)
	})
});