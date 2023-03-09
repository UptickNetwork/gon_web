<template>
  <el-row :gutter="20" class="panel-group">
    <el-col v-for="(item, index) in lineChartData" :key="index" :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData(item.key,item.name)">
        <div v-if="item.name !== ''" :class="'card-panel-icon-wrapper ' + iconStyles[index%4]">
          <svg-icon :icon-class="item.iconClass" class-name="card-panel-icon" />
        </div>
        <div v-if="item.name !== ''" class="card-panel-description">
          <div class="card-panel-text">
            {{ item.name }}
          </div>
          <count-to :start-val="0" :end-val="parseFloat(groupData[item.key])" :duration="2600" :decimals="item.decimals" class="card-panel-num" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>


<script>
import CountTo from 'vue-count-to'
import { getEvmInfo } from '@/api/user'
export default {
  components: {
    CountTo
  },
  props: {
    groupData: {}
  },
  data() {
    return {
      iconStyles: [
        "icon-people",
        "icon-message",
        "icon-money",
        "icon-shopping",
      ],
      lineChartData: [
        {
          key: "totalUsers",
          iconClass: "peoples",
          name: "用户数",
        },
        {
          key: "totalCreators",
          iconClass: "peoples",
          name: "发布资产的用户数",
        },
        {
          key: "activity",
          iconClass: "peoples",
          name: "活动数",
        },
        {
          key: "totalNfts",
          iconClass: "peoples",
          name: "资产数",
        },
        {
          key: "totalNumber",
          iconClass: "chart",
          name: "总销量",
        },
        {
          key: "totalTurnover",
          iconClass: "money",
          name: "总交易额",
          decimals: 2
        },
        {
          key: "mallTurnover",
          iconClass: "money",
          name: "实际交易额",
          decimals: 2
        }
      ],
    }
  },


  created() {
    // this.reuqestEVMInfo()
  },
  mounted() {
    // this.reuqestEVMInfo()
  },
  methods: {
    handleSetLineChartData(type, name) {
      this.$emit('handleSetLineChartData', type, name)
      console.log(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    display: flex;

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
      width: 80px;
      height: 80px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      padding-left: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: right;
      padding-left: 10PX;
      flex: 1;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
