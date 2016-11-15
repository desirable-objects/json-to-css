'use strict'

class Css {
  static of (json) {
    const selectors = Object.keys(json)
    return selectors.map((selector) => {
      const definition = json[selector]
      const rules = Object.keys(definition)
      const result = rules.map((rule) => {
        return `${rule}:${definition[rule]}`
      }).join(';')
      return `${selector}{${result}}`
    }).join('\n')
  }
}

module.exports = Css