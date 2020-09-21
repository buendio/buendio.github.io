const path = require("path");
const webpack = require("webpack");

module.exports = {
    plugins: [ 
        new webpack.ProvidePlugin({ 
            "jQuery": "jquery", 
            "window.jQuery": "jquery", 
            "jquery": "jquery", 
            "window.jquery": "jquery", 
            "$": "jquery", 
            "window.$": "jquery"
        })
    ],
    
    entry: {
        main: "./src/js/index.js",
        //test: "./src/js/pages/test.js"
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: [
                            ["@babel/preset-env", { modules: false }]
                        ]
                    }
                }
            }
        ]
    },

    resolve: {
        alias: {
            "%block%": path.resolve(__dirname, "src/blocks"),
            "%baseJS%": path.resolve(__dirname, "src/js/base"),
            "%libsJS%": path.resolve(__dirname, "src/js/vendor/import"),
            "%baseCSS%": path.resolve(__dirname, "src/styles/base"),
            "%libsCSS%": path.resolve(__dirname, "src/styles/vendor/import"),
        }
    }
};
