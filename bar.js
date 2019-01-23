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
