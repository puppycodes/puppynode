# puppynode

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://axe312.mit-license.org)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![semantic-release](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Installation

yarn it:

```js
yarn
```

or if your more of an NPM girl...

```js
npm install
```


##  Tools


### metalsmith

* [metalsmith-assets](https://github.com/treygriffith/metalsmith-assets) to copy webpack files
* [metalsmith-markdownit](https://github.com/segmentio/metalsmith-markdown) to render markdown
* [metalsmith-layouts](https://github.com/superwolff/metalsmith-layouts) to apply layouts


### Webpack Middleware


[webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)... styles get included via require within `page.js` and extracted to a css file with [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

##  File Structure
|Pattern|Description|
|-|-|
|`./content/*` | content files, mainly markdown |
|`./layouts/*.html` | [metalsmith-layouts](https://github.com/superwolff/metalsmith-layouts) layout files|
|`./src/config/paths.js` | path configuration
|`./src/assets/css,js` | page javascript and stylesheet files|
|`./src/scripts/*.js`  | build process & dev environment scripts|
|`./dist/assets/**/*` | webpack output directory|
|`./dist/site/**/*` | metalsmith output directory|

## Server
Just run:

```
yarn dev
```

or if you like...

```
npm run dev
```
this will spawn `http://localhost:3000` with browser-sync!
<br>

### Live Reload

Browser sync spawns a basic webserver with the webpack-dev-middleware injected.

* [browser-sync](https://browsersync.io/): Rebuilds metalsmith when content or layouts change.
* [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware): Triggers browser-sync when webpack files like scripts or styles change
* [nodemon](https://github.com/remy/nodemon): Restarts dev server when build scripts or config changes

### Extras

1. The dev server supports the `rs` command to restart the server manually
2. The `metalsmith-helpers.js` in the scripts folder exports two metalsmith debugging plugins: A `StatisticsPlugin` for a general overview and a `DebugPlugin`
3. The metalsmith-layouts config contains a little helper for handlebars to output variable content. Usage: `<pre>{{debug YOUR_VARIABLE}}</pre>` (Hint: use `this` as variable to debug display the whole file metadata)
4. Check `npm run` for an overview of all available scripts.

## Build

You can run a fresh page build via `yarn build` (or `npm run build`)

1. `npm-scripts`: Set `DEBUG` environment variable to `metalsmith*` to enable metalsmith debugging
2. `npm-scripts`: Clean up `./dist/*` directories
3. `webpack`: Build javascript and stylesheet files via webpack
4. `metalsmith`: Copy webpack assets to site directory
5. `metalsmith`: Fingerprint webpack assets
6. `metalsmith`: Compile markdown files
7. `metalsmith`: Apply layouts
8. `metalsmith`: Show statistics

everything generated in `./dist/site/`

## Deploy

With `yarn deploy` (or `npm run deploy`) you can deploy to GitHub pages via [gh-pages](https://www.npmjs.com/package/gh-pages)

Running `yarn server` (or `npm run server`) will spawn a production server so you can see how the deploy turned out!

woof!
