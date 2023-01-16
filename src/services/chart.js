//chart built by Apex Charts

import ApexCharts from "apexcharts";

let chartWidth = window.innerWidth/1.5;

export let options = {
  series: [{
  data: []
}],
  chart: {
  type: 'bar',
  height: 700,
  width: chartWidth
},
plotOptions: {
  bar: {
    barHeight: '100%',
    distributed: true,
    horizontal: true,
    dataLabels: {
      position: 'bottom'
    },
  }
},
colors: [],
dataLabels: {
  enabled: true,
  textAnchor: 'start',
  style: {
    colors: ['#fff']
  },
  formatter: function (val, opt) {
    return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
  },
  offsetX: 0,
  dropShadow: {
    enabled: true
  }
},
stroke: {
  width: 1,
  colors: ['#fff']
},
xaxis: {
  categories: [],
},
yaxis: {
  labels: {
    show: false
  }
},
title: {
    text: 'Scores',
    align: 'center',
    floating: true
},
subtitle: {
    text: '',
    align: 'center',
},
tooltip: {
  theme: 'dark',
  x: {
    show: false
  },
  y: {
    title: {
      formatter: function () {
        return ''
      }
    }
  }
}
};

export let chart = new ApexCharts(document.querySelector("#chart"), options);
