// import { h, Component, render } from 'https://unpkg.com/preact@latest?module'
// import htm from 'https://unpkg.com/htm?module'
import { h, Component, render } from 'https://test.ublo.immo/vendor/preact.js'
import htm from 'https://test.ublo.immo/vendor/htm.js'
import BubbleTea from 'https://test.ublo.immo/BubbleTea.js'

export const html = htm.bind(h)
const app = html`<main><${BubbleTea} second="1" /></main>`

render(app, document.getElementById('app'))