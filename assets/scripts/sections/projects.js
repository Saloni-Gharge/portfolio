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

    // Set default filter to "programming"
    filterizr.filter('optimization');

    // Highlight the default selected filter button
    document.querySelectorAll('.project-filtr-control').forEach(button => {
      if (button.getAttribute('data-filter') === 'optimization') {
        button.classList.add('active'); // Add active class to the selected filter
      } else {
        button.classList.remove('active');
      }
    });

    // Ensure other filter buttons update their active state on click
    document.querySelectorAll('.project-filtr-control').forEach(button => {
      button.addEventListener('click', function () {
        document.querySelectorAll('.project-filtr-control').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
});

// Dynamically insert GitHub buttons script.
insertScript('github-buttons', 'https://buttons.github.io/buttons.js');
