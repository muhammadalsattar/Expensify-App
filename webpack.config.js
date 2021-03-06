const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV=='development'){
    require('dotenv').config({path: '.env.development'})
}
else if (process.env.NODE_ENV=='test'){
    require('dotenv').config({path: '.env.test'})
}

module.exports = (env)=> {
    return {
        entry: ['babel-polyfill','./src/index.js'],
        output: {
            path: path.resolve(__dirname, 'public/static'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-object-rest-spread"]
                    }
                }
            }, 
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {sourceMap: true}
                },
                {
                    loader: 'sass-loader',
                    options: {sourceMap: true}
                }] 
            }]
        },
        plugins: [new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
                new webpack.DefinePlugin({
                    'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                    'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                    'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                    'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                    'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                    'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                    'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
                })
            ],
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'public/'),
                publicPath: '/'
            },
            
            historyApiFallback: true
        },
        devtool: env.production? 'source-map' : 'inline-source-map'
    }
}