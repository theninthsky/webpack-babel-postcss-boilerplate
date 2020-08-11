module.exports = {
    entry: './src/js/index.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js'],
    },
    mode: 'production',
    optimization: {
        minimize: true,
    },
    output: {
        path: __dirname + '/dist/js',
        publicPath: '/',
        filename: 'index.js',
    },
};
