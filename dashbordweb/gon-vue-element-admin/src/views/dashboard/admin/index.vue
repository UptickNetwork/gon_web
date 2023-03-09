<template>
  <div v-loading.fullscreen.lock="fullscreenLoading" class="dashboard-editor-container">
    <panel-group :group-data="groupData" @handleSetLineChartData="handleSetLineChartData" />
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <div class="card-panel-text">
        {{ lineTitle }}
      </div>
      <line-chart :chart-data="lineChartData" :date-list="dateList" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <pie-chart :pie-data="groupData" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <bar-chart :bar-data="infoData" :date-list="dateList" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
// import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
// import TransactionTable from './components/TransactionTable'
// import TodoList from './components/TodoList'
// import BoxCard from './components/BoxCard'
import {
  getDashboradHome
} from '@/api/user'

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    PieChart,
    BarChart
  },
  filters: {

  },
  data() {
    return {
      fullscreenLoading: false,
      dateValue: '',
      lineChartData: {},
      groupData: {},
      infoData: {},
      dateList: [],
      lineTitle: 'Users',
      dateTitle: 'EVM',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      }
    }
  },
  mounted() {
    this.getDashboradHome()
  },
  methods: {
    getDashboradHome() {
      this.fullscreenLoading = true
      getDashboradHome().then(response => {
        this.fullscreenLoading = false
        console.log(response.data)
        this.groupData = response.data
      })
    },
    setLineData(list, type) {
      this.lineChartData = {}
      var lineData = {
        lineList: []
      }
      list.forEach(element => {
        // console.log(element)
        // console.log(element[type])
        // console.log(this.formatDate(element.createTime))
        lineData.lineList.push(element[type])
        this.lineChartData = lineData
      })
    },
    formatDate(value, year) {
      const date = new Date(value) // 这个是纳秒的，想要毫秒的可以不用除以1000000
      const y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? ('0' + MM) : MM
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      // let h = date.getHours()
      // h = h < 10 ? ('0' + h) : h
      // let m = date.getMinutes()
      // m = m < 10 ? ('0' + m) : m
      // let s = date.getSeconds()
      // s = s < 10 ? ('0' + s) : s
      if (year) {
        return y + '-' + MM + '-' + d
      }
      // return y + '.' + MM + '.' + d + ' ' + h + ':' + m + ':' + s;
      // return MM + '.' + d + ' ' + h + ':' + m + ':' + s;
      return MM + '-' + d
      // return h + ':' + m + ':' + s;
    },

    handleSetLineChartData(type, name) {
      console.log(type)
      console.log(name)
      if (type === '') {
        return
      }
      this.lineTitle = name
      this.setLineData(this.infoData.list, type)
    }

  }
}
</script>

<style lang="scss" scoped>
  .dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    position: relative;

    .github-corner {
      position: absolute;
      top: 0px;
      border: 0;
      right: 0;
    }

    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }

    .card-panel-text {
      font-weight: bold;
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      margin-bottom: 12px;
    }

    .card-date-text {
      font-weight: bold;
      line-height: 50px;
      color: rgba(0, 0, 0, 0.5);
      font-size: 36px;
      margin-bottom: 12px;
      text-align: center;
    }
  }

  @media (max-width:1024px) {
    .chart-wrapper {
      padding: 8px;
    }
  }
</style>
