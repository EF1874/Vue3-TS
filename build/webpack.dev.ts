import { join } from 'path';
import { Configuration } from 'webpack';
import common from './webpack.config';
import { merge } from 'webpack-merge';
// import 'webpack-dev-server';
// const path = require('path');
// const { merge } = require('webpack-merge');
// const common = require('./webpack.config.js');

const config: Configuration = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: join(__dirname, './dist')
        },
        port: 9000,
        open: false
    }
});

export default config;