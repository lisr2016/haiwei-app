import * as echarts from '../../components/ec-canvas/echarts'

let lineChart = null;
let barChart = null;
let pieChart = null;
let lineOption = {}
let pieOption = {
  title: {
    text: '某站点用户访问来源',
    subtext: '纯属虚构',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
let barOption = {
  legend: {},
  tooltip: {},
  dataset: {
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
      {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
      {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
      {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
      {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
    ]
  },
  xAxis: {type: 'category'},
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    {type: 'bar'},
    {type: 'bar'},
    {type: 'bar'}
  ]
}

function initLineChart(canvas, width, height) {
  lineChart = echarts.init(canvas, null, { width, height })
  canvas.setChart(lineChart);
  lineChart.setOption(lineOption);
  return lineChart;
}
function initPieChart(canvas, width, height) {
  pieChart = echarts.init(canvas, null, { width, height });
  canvas.setChart(pieChart);
  pieChart.setOption(pieOption);
  return pieChart;
}
function initBarChart(canvas, width, height) {
  barChart = echarts.init(canvas, null, { width, height });
  canvas.setChart(barChart);
  barChart.setOption(barOption);
  return barChart;
}

Page({
  data: {
    line: {
      onInit: initLineChart
    },
    bar: {
      onInit: initBarChart
    },
    pie: {
      onInit: initPieChart
    },
  },
  onLoad() {
    lineOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      }],
    }
    if (lineChart) {
      lineChart.setOption(lineOption)
    }
    if (barChart) {
      barChart.setOption(barOption)
    }
    if (pieChart) {
      pieChart.setOption(pieOption)
    }
  }
})
