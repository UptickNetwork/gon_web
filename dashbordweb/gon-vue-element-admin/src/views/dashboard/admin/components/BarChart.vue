<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 2000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    barData: {
      type: Object,
      required: true
    },
    dateList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chart: null,
      irisList: [],
      uptickList: [],
      atomList: []
    }
  },
  watch: {
    barData: {
      deep: true,
      handler() {
        this.setOptions()
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
    },
    setOptions({} = {}) {
      console.log(this.barData)
      console.log(this.dateList)

      this.barData.list.forEach(element => {
        this.irisList.push(parseInt(element['soldAmountIris']))
        this.uptickList.push(parseInt(element['soldAmountUptick']))
        this.atomList.push(parseInt(element['soldAmountAtom']))
      })
      console.log(this.irisList)
      console.log(this.uptickList)
      console.log(this.atomList)

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 30,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: this.dateList,
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        legend: {
          data: ['IRIS', 'UPTICK', 'ATOM']
        },
        series: [{
          name: 'IRIS',
          type: 'bar',
          // stack: 'vistors',
          // barWidth: '60%',
          data: this.irisList,
          animationDuration
        },
        {
          name: 'UPTICK',
          type: 'bar',
          // stack: 'vistors',
          // barWidth: '60%',
          data: this.uptickList,
          animationDuration
        },
        {
          name: 'ATOM',
          type: 'bar',
          // stack: 'vistors',
          // barWidth: '60%',
          data: this.atomList,
          animationDuration
        }
        ]
      })
    }
  }
}
</script>
