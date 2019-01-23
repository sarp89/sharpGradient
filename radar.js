// Gradient background-color plugin
Chart.pluginService.register({
  beforeDraw: function (chart, easing) {
    if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColorOne &&
      chart.config.options.chartArea.backgroundColorTwo && chart.config.options.chartArea.backgroundColorThree) {
      var helpers = Chart.helpers;
      var ctx = chart.chart.ctx;
      var chartArea = chart.chartArea;

      var centerX = chart.scale.xCenter;
      var centerY = chart.scale.yCenter;
      var radius = chart.scale.drawingArea;

      var grd = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      grd.addColorStop(0.1, chart.config.options.chartArea.backgroundColorOne);
      grd.addColorStop(0.5, chart.config.options.chartArea.backgroundColorTwo);
      grd.addColorStop(1, chart.config.options.chartArea.backgroundColorThree);

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      ctx.save();
      ctx.fillStyle = grd;
      ctx.fill();
      ctx.restore();
    }
  }
});
