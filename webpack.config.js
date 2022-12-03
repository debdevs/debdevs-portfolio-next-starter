const CopyWebpackPlugin = require('copy-webpack-plugin');
 
module.exports = {
    context: path.join(__dirname, './'),
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ]
};