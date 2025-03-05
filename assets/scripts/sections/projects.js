import Filterizr from 'filterizr'
import { insertScript } from '../core'

document.addEventListener('DOMContentLoaded', () => {
  // ================== Project cards =====================
  const projectCardHolder = document.getElementById('project-card-holder')
  if (projectCardHolder != null && projectCardHolder.children.length !== 0) {
    const filterizr = new Filterizr('.filtr-projects', {
      layout: 'sameWidth',
      controlsSelector: '.project-filtr-control'
    });

    // Set default filter to first active button on page load
    const defaultFilter = document.querySelector('.project-filtr-control.active');
    if (defaultFilter) {
      const filterValue = defaultFilter.getAttribute('data-filter');
      filterizr.filter(filterValue);
    }

    // Function to update active button
    function updateActiveButton(selectedFilter) {
      document.querySelectorAll('.project-filtr-control').forEach(button => {
        button.classList.toggle('active', button.getAttribute('data-filter') === selectedFilter);
      });
    }

    // Event listener for filter buttons
    document.querySelectorAll('.project-filtr-control').forEach(button => {
      button.addEventListener('click', function () {
        const selectedFilter = this.getAttribute('data-filter');
        filterizr.filter(selectedFilter);
        updateActiveButton(selectedFilter);
      });
    });
  }
});

// Insert GitHub buttons script dynamically
insertScript('github-buttons', 'https://buttons.github.io/buttons.js');
