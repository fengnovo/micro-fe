const {
    override,
    // fixBabelImports, addLessLoader,
    overrideDevServer, 
    watchAll
} = require('customize-cra')
const name = require('./package.json').name


module.exports = {

  webpack: override(
    (config) => {
        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = 'umd';
        config.output.jsonpFunction = `webpackJsonp_${name}`;
        config.output.globalObject = 'window';
    
        return config;
    }
  ),

  devServer: overrideDevServer(
    (_) => {
        const config = _;
        config.headers = {
          'Access-Control-Allow-Origin': '*',
        };
        config.historyApiFallback = true;
        // config.hot = false;
        // config.watchContentBase = false;
        // config.liveReload = false;
    
        return config;
    }
  )

}