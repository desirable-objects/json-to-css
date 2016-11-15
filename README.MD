## Json to Css

Converts JSON to Css

### Dependencies

This module has no external dependencies.

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