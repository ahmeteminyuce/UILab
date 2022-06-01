const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    devServer: {
        port: 3000, // Opens http://localhost:3000/
        open: true, // Opens browser on a new tab automatically
    },
    resolve: {
        extensions: ['.js', '.less', '.css'], // file types
        alias: { // custom aliases
            coreStyles: path.resolve(__dirname, './less/core/'),
            style: path.resolve(__dirname, './less/modules/'),
            coreScripts: path.resolve(__dirname, './js/core/'),
            script: path.resolve(__dirname, './js/modules/'),

            ui: path.resolve(__dirname, './js/core/globals'),
            utils: path.resolve(__dirname, './src/utils/'),
            icon: path.resolve(__dirname, './icon/'),
            components: path.resolve(__dirname, './src/components/'),
        },
    },
    performance: {
        maxEntrypointSize: 512000, // rendered main.js size limit
        maxAssetSize: 512000 // single asset size limit
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { // loads JSX files
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, "public"),
                ],
                use: [ // loads CSS
                    "style-loader",
                    "css-loader"
                ],
            },
            {
                test: /\.less$/i,
                include: [
                    path.resolve(__dirname, "less"),
                ],
                use: [ // compiles Less to CSS
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                strictMath: true, // true: requires math with parentheses
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                include: [
                    path.resolve(__dirname, "icon"),
                    path.resolve(__dirname, "dist"),
                ],
                use: [ // loads SVG
                    {
                        loader: 'svg-url-loader',
                        options: {
                            iesafe: true, // make all svg images to work in IE
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
};