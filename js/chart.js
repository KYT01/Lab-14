'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

const appState = new AppState();
appState.loadItems();

function renderChart() {

    const productNames = appState.allProducts.map(product => product.name);
    const productClicks = appState.allProducts.map(product => product.timesClicked);
    const productViews = appState.allProducts.map(product => product.timesShown);

         const data = {
        labels: productNames,
        datasets: [
          {
            label: "CLICKS",
            data: productClicks,
            backgroundColor: ("rgb(0, 115, 255)"),
      borderWidth: 1,
          },
          {
            label: "VIEWS",
            data: productViews,
            backgroundColor: ("rgb(53, 194, 255)"),
            borderWidth: 1,
          },
        ],
      };
    
      const config = {
        type: "bar",
        data: data,
      };

      new Chart(canvasElem, config);
    
}

renderChart();
