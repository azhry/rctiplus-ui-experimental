// https://medium.com/@rossbulat/how-to-publish-npm-packages-4e519744c416

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
    mode: 'production',
    entry: './src/rctiplus-ui.js',
    output: {
        path: path.resolve('lib'),
        filename: 'rctiplus-ui.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|png|jpg|JPG)(\?.*$|$)/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            generator: (content) => svgToMiniDataURI(content.toString()),
                        },
                    }
                ]
            }
        ],
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            '~': path.join(__dirname, '.')
        }
    },
    externals: {
        // Don't bundle react or react-dom      
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }) 
    ]
};