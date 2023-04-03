const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
  console.log("Compiling SASS...");
  src("./public/main.scss") // Identify principal file
    .pipe(sass()) // Compile SASS
    .pipe(dest("public")); // Export it or save it in a location

  done();
}

function dev( ) {

}
exports.css = css;
