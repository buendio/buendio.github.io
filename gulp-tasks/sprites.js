"use strict";



import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";
import svgMin from "gulp-svgmin";
import cheerio from "gulp-cheerio";
import browsersync from "browser-sync";
import svgSprite from "gulp-svg-sprite";
import replace from "gulp-replace";

gulp.task("sprites", () => {
    return gulp.src(paths.sprites.src)
        .pipe(svgMin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                $("[fill]").removeAttr("fill");
                $("[stroke]").removeAttr("stroke");
                $("[style]").removeAttr("style");
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(replace("&gt;", ">"))
        .pipe(svgSprite({
            mode: {
                inline: true,
                symbol: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(gulp.dest(paths.sprites.dist))
        .pipe(debug({
            "title": "Sprites"
        }))
        .on("end", browsersync.reload);
});