const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');


module.exports = {
    entry: __dirname + '/app/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	// devServer:{
	// 	historyApiFallback: true,
	// 	https: true,
	// 	port: 443
	// },
    devServer: {
        https: {
            key: fs.readFileSync(path.resolve(__dirname, '/Users/tatiana.perry/Documents/DO_NOT_DELETE/dev-docs/samples/apps/checkout-sdk-embedded/react-webpack/localhost.key')),
			cert: fs.readFileSync(path.resolve(__dirname, '/Users/tatiana.perry/Documents/DO_NOT_DELETE/dev-docs/samples/apps/checkout-sdk-embedded/react-webpack/localhost.crt')),
        },
		port: 443,
		historyApiFallback: true,
    },
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	]
};
