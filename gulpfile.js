'use strict';
var gulp= require('gulp');
// var less= require('gulp-less');
var path= require('path');
// var concat=require('gulp-concat')

// gulp.task('concat-css', function(){
//  return gulp.src(['./src/assets/less/css-generated/*.css'])
//    .pipe(concat({path:'main.css'}))
//    .pipe(gulp.dest('./src/assets/css'));
// });

gulp.task('less', function(){
 return gulp.src('./src/assets/less/main.less')
     .pipe(less({
       paths:[path.join(__dirname,'less','includes')]
     }))
     .pipe(gulp.dest('./src/assets/css'));
  //console.log("Hi! I'm Gulp default task!");
});

gulp.task('watch', function(){
   gulp.watch('./src/assets/less/*.less', ['less']);
});

gulp.task('default', ['watch'])

//main.less code