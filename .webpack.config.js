const path = require('path');
const {appendWebpackPlugin} = require('@rescripts/utilities');
const webpack = require('webpack');

module.exports = config => {
    config.target = 'electron-renderer';
    
    return appendWebpackPlugin(
        new webpack.WatchIgnorePlugin(['./public/website/']),
        config
    )
    return config;
}