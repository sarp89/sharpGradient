Chart.pluginService.register({
  beforeDraw: function (chart, easing) {
    if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColorOne &&
      chart.config.options.chartArea.backgroundColorTwo && chart.config.options.chartArea.backgroundColorThree) {
      var helpers = Chart.helpers;
      var ctx = chart.chart.ctx;
      var chartArea = chart.chartAr
      ctx.save();
      var grd = ctx.createLinearGradient(chartArea.left, chartArea.top, chartArea.right, chartArea.top);
      grd.addColorStop(0, chart.config.options.chartArea.backgroundColorOne);
      grd.addColorStop(0.5, chart.config.options.chartArea.backgroundColorTwo);
      grd.addColorStop(1, chart.config.options.chartArea.backgroundColorThree);
      ctx.fillStyle = grd;
      ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      ctx.restore();
    }
  }
});
    
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      chartArea: {
          backgroundColorOne: 'rgba(255,113,113,1)',
          backgroundColorTwo: 'rgba(255,251,123,1)',
          backgroundColorThree: 'rgba(85,203,140,1)',
      },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
