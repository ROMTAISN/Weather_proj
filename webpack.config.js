const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    performance: {
        maxEntrypointSize: 5120000,
        maxAssetSize: 5120000
   },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'}),
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader',
                ],
            }
        ]
    }
};