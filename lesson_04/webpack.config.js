const path = require('path');
MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports =  (env = {mode: 'development'})  => {
	const isProduction = env.mode === 'production';
	return {
		mode: env.mode,
		entry: "./src/index.js",
		output: {
			path:   __dirname + "/dist",
			filename:"bundle.js"
		},
		module: {
			rules: [
			{test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
				{
					loader: MiniCssExtractPlugin.loader,
				},
				{
					loader: "css-loader", options: {
						sourceMap: true
					}
				},
				{
					loader: "sass-loader", options: {
						sourceMap: true
					}
				}
				]
			},
			]  
		},
		plugins: [
		new MiniCssExtractPlugin({
			filename: "css/style.css"
		})
		],
		devServer: {
			contentBase: path.join(__dirname, 'src'),
			compress: true,
			port: 9000,
		}
	}
}
