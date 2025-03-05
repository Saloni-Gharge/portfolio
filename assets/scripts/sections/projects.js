import Filterizr from 'filterizr'
import { insertScript } from '../core'

document.addEventListener('DOMContentLoaded', () => {
  // ================== Project cards =====================

  // setup project filter buttons
  const projectCardHolder = document.getElementById('project-card-holder')
  if (projectCardHolder != null && projectCardHolder.children.length !== 0) {
    // Initialize Filterizr
    const filterizr = new Filterizr('.filtr-projects', {
      layout: 'sameWidth',
      controlsSelector: '.project-filtr-control'
    });

    // Set default filter to "programming" (or any default category)
    filterizr.filter('programming');
  }
});

// Dynamically insert GitHub buttons script.
insertScript('github-buttons', 'https://buttons.github.io/buttons.js');
