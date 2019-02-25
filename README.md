# sharpGradient
Gradient plugin for ChartJs

Add the snippet after loading chartjs but before initializing the chart object. To customize when the gradient should start or
end, just mess around with the settings within the plugin.

In options add:
```js
chartArea: {
  backgroundColorOne: 'rgba(221,81,81,0.75)',
  backgroundColorTwo: 'rgba(230,125,125,0.75)',
  backgroundColorThree: 'rgba(232,157,97,0.75)',
  //backgroundColorFour: 'rgba(129,200,154,0.75)',
  //backgroundColorFive: 'rgba(87,181,120,0.75)',
},
```

If you want more colors, just add extra variables for the parameters & within the plugin:
```js
Chart.pluginService.register({
  beforeDraw: function (chart, easing) {
    if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColorOne &&
      chart.config.options.chartArea.backgroundColorTwo && chart.config.options.chartArea.backgroundColorThree &&
      chart.config.options.chartArea.backgroundColorFour && chart.config.options.chartArea.backgroundColorFive) {
      var helpers = Chart.helpers;
      var ctx = chart.chart.ctx;
      var chartArea = chart.chartArea;
      ctx.save();
      var grd = ctx.createLinearGradient(chartArea.left, chartArea.top, chartArea.right, chartArea.top);
      grd.addColorStop(0, chart.config.options.chartArea.backgroundColorOne);
      grd.addColorStop(0.28, chart.config.options.chartArea.backgroundColorTwo);
      grd.addColorStop(0.56, chart.config.options.chartArea.backgroundColorThree);
      grd.addColorStop(0.78, chart.config.options.chartArea.backgroundColorFour);
      grd.addColorStop(1, chart.config.options.chartArea.backgroundColorFive);
      ctx.fillStyle = grd;
      ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      ctx.restore();
    }
  }
});
```

Enjoy!
