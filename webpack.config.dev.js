// https://medium.com/@rossbulat/how-to-publish-npm-packages-4e519744c416

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true
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
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: './.postcssrc.js'
                            }
                        }
                    }
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
            '~': path.join(__dirname, '.')
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'tailwind.css',
            chunkFilename: 'tailwind.css'
        }),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        })
    ]
};