const HtmlWebpackPlugin    = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: './src/index.html',
        } ),
        new MiniCssExtractPlugin(),
    ],
}