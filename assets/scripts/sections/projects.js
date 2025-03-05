import Filterizr from 'filterizr'
import { insertScript } from '../core'

document.addEventListener('DOMContentLoaded', () => {
  // ================== Project cards =====================

  // setup project filter buttons
  const projectCardHolder = document.getElementById('project-card-holder')
  if (projectCardHolder != null && projectCardHolder.children.length !== 0) {
    // eslint-disable-next-line no-new
    new Filterizr('.filtr-projects', {
      layout: 'sameWidth',
      controlsSelector: '.project-filtr-control'
    })
  }
})

// Apply the default category filter
  filterizr.filter('digital-ai')


// dynamically insert github buttons script.
insertScript('github-buttons', 'https://buttons.github.io/buttons.js')
