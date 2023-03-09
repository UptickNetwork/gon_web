<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

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
    pieData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    pieData: {
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
      // this.setOptions(this.pieData)
    },
    setOptions({} = {}) {
      console.log(this.pieData)

      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '21',
          // data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
          data: ['Users(not created)', 'Creators']
        },
        series: [{
          name: 'Total Users：' + this.pieData.totalUsers,
          type: 'pie',
          // roseType: 'radius',
          radius: [20, 95],
          center: ['50%', '45%'],
          data: [{
            value: parseInt(this.pieData.totalUsers) - parseInt(this.pieData.totalCreators),
            name: 'Users(not created)'
          },
          {
            value: parseInt(this.pieData.totalCreators),
            name: 'Creators'
          }
            // { value: 149, name: 'Forex' },
            // { value: 100, name: 'Gold' },
            // { value: 59, name: 'Forecasts' }
          ],
          animationEasing: 'cubicInOut',
          animationDuration: 2600
        }]
      })
    }
  }
}
</script>
