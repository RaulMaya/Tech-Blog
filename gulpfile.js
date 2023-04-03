const { watch, series, src, dest } = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");

function compileJS() {
  return src("./node_modules/bootstrap/dist/js/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify())
    .pipe(rename({ suffix: "-build.min" }))
    .pipe(dest("./public/assets/js/"));
}

function compileSCSS() {
  return src("./public/assets/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(rename({ extname: "-build.min.css" }))
    .pipe(dest("./public/assets/css/"));
}

function watchFiles() {
  watch(["./public/**/**.scss", "./public/**/**.scss"], compileSCSS);
  watch("./public/assets/js/**/*.js", compileJS);
}

exports.build = series(compileSCSS, compileJS);
exports.watch = watchFiles;
