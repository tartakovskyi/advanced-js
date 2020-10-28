const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.optimize\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: {
				preset: ['default', { discardComments: { removeAll: true } }],
			},
			canPrint: true
		})
		],
		devServer: {
			contentBase: path.join(__dirname, 'src'),
			compress: true,
			port: 9000,
		}
	}
}
