var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat'), //объединитель файлов
    cssnano     = require('gulp-cssnano'),
    uncss = require('gulp-uncss'), //очиститель css
    rename      = require('gulp-rename'), 
    del         = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    imagemin    = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant    = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png;
    cache       = require('gulp-cache'); // Подключаем библиотеку кеширования

gulp.task('uncss', function(){ 
    return gulp.src('src/less/components/grid-bootstrap.less') // Берем источник
        .pipe(uncss({
        html: ['src/*.html']
        }))
        .pipe(rename({suffix: '-min'}))
        .pipe(gulp.dest('src/less/components')) // Выгружаем результата в папку app/css
});

gulp.task('less', function(){ // Создаем таск "less"
    return gulp.src('src/less/style.less') // Берем источник
        .pipe(less()) // Преобразуем Less в CSS посредством gulp-less
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'src' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('default', ['browser-sync', 'less'], function() {
    gulp.watch('src/less/**/*.less', ['less']); // Наблюдение за less файлами
    gulp.watch('src/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('src/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});


gulp.task('clean', function() {
    return del.sync('build'); // Удаляем папку dist перед сборкой
});



gulp.task('css-cool', ['less'], function() {
    return gulp.src('src/css/style.css') // Выбираем файл для минификации
        //.pipe(uncss({ html: ['app/*.html'] })) //выкидывает ненужные стили, с js плохо дружит
        .pipe(autoprefixer(['last 15 versions', "> 1%", "ie 10", "ie 9", "ie 8"], { cascade: true })) // Создаем префиксы
        .pipe(csscomb()) //делаем красиво
        //.pipe(gulp.dest('dist/css')) //выгружаем  в папку app/css
        .pipe(cssnano()) // Сжимаем
        //.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('build/css')); // Выгружаем в папку app/css
});


gulp.task('img', function() {
    return gulp.src('src/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('build/img')); // Выгружаем
});


gulp.task('build', ['clean', 'css-cool', 'img'], function() {

    var buildFonts = gulp.src('src/fonts/**/*') // Переносим шрифты
    .pipe(gulp.dest('build/fonts'))

    var buildLib = gulp.src('src/lib/**/*') // Переносим библиотеки
    .pipe(gulp.dest('build/lib'))

    var buildJs = gulp.src('src/js/**/*') // Переносим скрипты
    .pipe(gulp.dest('build/js'))

    var buildHtml = gulp.src('src/*.html') // Переносим HTML
    .pipe(gulp.dest('build'));

});