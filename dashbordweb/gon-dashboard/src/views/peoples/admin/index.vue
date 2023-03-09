<template>
  <div v-loading.fullscreen.lock="fullscreenLoading" class="dashboard-editor-container">

    <panel-group :group-data="groupData" @handleSetLineChartData="handleSetLineChartData" />
    <template>
      <pagination :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
    </template>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import Pagination from './components/Pagination'
import {
  getDashboradHome,
  getAccountList
} from '@/api/user'

export default {
  name: 'Peoples',
  components: {
    PanelGroup,
    Pagination
    // PieChart,
    // BarChart
  },
  filters: {

  },
  data() {
    return {
      fullscreenLoading: false,
      lineChartData: {},
      groupData: {},
      infoData: {},
      dateList: [],
      total: 0,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  mounted() {
    this.getDashboradHome()
    this.getList()
  },
  methods: {
    getList() {
      debugger
      const params = {
        page: 1,
        size: 20
      }
      getAccountList(params).then(response => {
        this.fullscreenLoading = false
        console.log(response.data)
        this.groupData = response.data
      })
    },
    getDashboradHome() {
      this.fullscreenLoading = true
      getDashboradHome().then(response => {
        this.fullscreenLoading = false
        console.log(response.data)
        this.groupData = response.data
      })
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
