const path = require("path");

// This is the base config. Use either dev or prod.

module.exports = {
	entry: path.resolve(__dirname, "../src/index"),
	output: {
		path: path.resolve(__dirname, "../public"),
		filename: "js/app.js",
	},

	// Currently we need to add '.ts' to the resolve.extensions array.
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "awesome-typescript-loader",
				options: {
					configFileName: path.resolve(__dirname, "../src/tsconfig.json"),
				},
			},
			{
				test: /\.scss$/,
			},
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: [["@babel/plugin-transform-react-jsx", { pragma: "m" }]],
					},
				},
			},
			{
				test: /\.js$/,
				exclude: /\/node_modules\//,
				use: {
					loader: 'babel-loader'
				}
			},
		],
	},
};
