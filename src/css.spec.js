'use strict'

const expect = require('code').expect

const Css = require('./css')

describe('Css', () => {
  let css
  const json = {
    h1: {
      'font-size': '18vw',
      color: 'rgb(128,128,128,255)'
    },
    p: {
      border: '1px 1px 1px 2px'
    },
    'a::before': {
      content: 'x'
    },
    '.a > .b > .c': {
      top: 0
    }
  }

  context('#Of()', () => {
    let css
    before(() => {
      css = Css.of(json)
    })

    it('Line per selector', () => {
      expect(css.split('\n').length).to.equal(4)
    })

    it('Parses basic css', () => {
      expect(css).to.contain('p{border:1px 1px 1px 2px}')
    })

    it('Parses multiple lines', () => {
      expect(css).to.contain('h1{font-size:18vw;color:rgb(128,128,128,255)}')
    })

    it('Parses pseudo selector', () => {
      expect(css).to.contain('h1{font-size:18vw;color:rgb(128,128,128,255)}')
    })

    it('Parses numbers', () => {
      expect(css).to.contain('.a > .b > .c{top:0}')
    })
  })
})