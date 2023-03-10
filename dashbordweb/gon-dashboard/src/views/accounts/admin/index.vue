<template>
  <div v-loading.fullscreen.lock="fullscreenLoading" class="dashboard-editor-container">
    <panel-group :group-data="groupData" />
    <el-row type="flex" justify="end" style="padding-bottom: 20px;">
      <el-input v-model="input" placeholder="" />
      <el-button type="primary" style="background-color: #1890ff; margin-left: 10px;" @click="searchButtonClick">Search
      </el-button>
    </el-row>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="teamName" label="TeamName" />
        <el-table-column label="IRISnetAddress">
          <template slot-scope="scope">
            <div class="address-style" @click="cellClick(scope.row.irisAddress)">{{ scope.row.irisAddress }}</div>
          </template>
        </el-table-column>
        <el-table-column label="StargazeAddress">
          <template slot-scope="scope">
            <div class="address-style" @click="cellClick(scope.row.stargazeAddress)">{{ scope.row.stargazeAddress }}</div>
          </template>
        </el-table-column>
        <el-table-column label="JunoAddress">
          <template slot-scope="scope">
            <div class="address-style" @click="cellClick(scope.row.junoAddress)">{{ scope.row.junoAddress }}</div>
          </template>
        </el-table-column>
        <el-table-column label="UptickAddress">
          <template slot-scope="scope">
            <div class="address-style" @click="cellClick(scope.row.uptickAddress)">{{ scope.row.uptickAddress }}</div>
          </template>
        </el-table-column>
        <el-table-column label="OmniFlixAddress">
          <template slot-scope="scope">
            <div class="address-style" @click="cellClick(scope.row.omniflixAddress)">{{ scope.row.omniflixAddress }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="discordHandle" label="DiscordHandle" />
        <el-table-column prop="community" label="Community" />
      </el-table>
    </template>
    <template>
      <el-row type="flex" justify="space-between" style="padding-bottom: 20px; padding-top: 20px;">
        <el-button type="primary" icon="el-icon-arrow-left" style="background-color: #1890ff;" @click="lastButtonClick">
          Last</el-button>
        <el-button type="primary" style="background-color: #1890ff;" @click="nextButtonClick">Next<i
          class="el-icon-arrow-right el-icon--right"
        /></el-button>
      </el-row>
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
      input: '',
      page: 1,
      groupData: {},
      tableData: []
    }
  },
  mounted() {
    this.getDashboradHome()
    this.getList()
  },
  methods: {
    searchButtonClick() {
      console.log(this.input)
      this.chainListInfo = []
      this.page = 1
      this.getList(this.input)
    },
    lastButtonClick() {
      if (this.page == 1) {
        return
      }
      document.documentElement.scrollTop = 0
      this.page -= 1
      this.getList()
    },
    nextButtonClick() {
      document.documentElement.scrollTop = 0
      this.page += 1
      this.getList()
    },
    getList(search) {
      const params = {
        search: search,
        page: this.page,
        size: 20
      }
      getAccountList(params).then(response => {
        this.fullscreenLoading = false
        console.log(response.data)
        this.tableData = response.data
      })
    },
    getDashboradHome() {
      this.fullscreenLoading = true
      getDashboradHome().then(response => {
        this.fullscreenLoading = false
        console.log(response.data)
        this.groupData = response.data
      })
    },
    cellClick(address) {
      console.log(address)
      this.$router.push({
        name: 'AccountDetail',
        params: {
          address: address
        }
      })
    }

  }
}
</script>

<style lang="scss" scoped>
  .address-style {
      cursor: pointer;
  }

  .address-style:hover {
    color: #ff704a;
  }

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
