## Json to Css

Converts JSON to Css

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

```
const Css = require('json-to-css')
const json = require('./some-css.json')

const css = Css.of(json)
console.log(css)
```