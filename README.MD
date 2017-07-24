## Json to Css

Converts JSON to Css

This module exists so that you can store inline styles in JSON files, in a structured way. It is utilised by [vudash](https://vudash.com) among others, to allow storage of CSS rules inside a configuration file in a better way than just bunging it in a string.

It can also make merging two sets of CSS easy - meaning that third-parties don't have to understand your existing CSS and how it cascades, in order to replace rules.

[![Build Status](https://travis-ci.org/desirable-objects/json-to-css.svg?branch=master)](https://travis-ci.org/desirable-objects/json-to-css) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

### Dependencies

This module has no external dependencies.

### Install

`npm install json-to-css`

### API

* <class> `Css`
  * [string] <static> `of(json)`
    * Returns a minified version of the css rules defined in `json`

### Usage

```javascript
const Css = require('json-to-css')
const json = require('./some-css.json')

const css = Css.of(json)
console.log(css)
```

### Output

You can get a pretty good idea of what the generated CSS looks like by looking at [the tests](json-to-css/src/css.spec.js), but in a pinch it produces a somewhat minified css output. Something like:

```javascript
const json = require('my-css.json')
// {
//  "h1": {
//    "font-size": "18vw",
//    "color": "#f00"
//  }
// }

const css = Css.of(json)
// h1{font-size:18vw;color:#f00;}
```
