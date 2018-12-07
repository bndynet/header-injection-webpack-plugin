# header-injection-webpack-plugin (Webpack 4.x)

A webpack plugin to inject header you specified into text files(js, css, html).

## Installation

```bash
npm i @bndynet/header-injection-webpack-plugin --save-dev
```

## Usage

```javascript
const HeaderInjectionWebpackPlugin = require('@bndynet/header-injection-webpack-plugin');

// webpack config
{
  plugins: [
    new HeaderInjectionWebpackPlugin()
  ]
}
```

## Options defalut value

```javascript
{
    package: './package.json',
    extensions: ['.js', '.css', '.html'],
    header: 'By default, includes name, version in your package.json and built time',  
}
```

**Example**:

```javascript
const HeaderInjectionWebpackPlugin = require('@bndynet/header-injection-webpack-plugin');
const app = require('./package.json');

new HeaderInjectionWebpackPlugin({
    header: `${app.name} v${app.version} by ${app.author}`
})
```

**Console Log**:

```bash
ℹ ｢hiw｣: Injecting header for .html,.css,.js files ...
ℹ ｢hiw｣: Injecting header for main.79aa05215e152932a87d.js: /*! [hiw] header-injection-webpack-plugin / 1.0.0 / 2018-12-02T09:18:53.917Z */
ℹ ｢hiw｣: Injecting header for index.html: <!-- [hiw] header-injection-webpack-plugin / 1.0.0 / 2018-12-02T09:18:53.917Z -->
ℹ ｢hiw｣: 2 file(s) done
```