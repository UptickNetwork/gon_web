<template>
  <el-row :gutter="20" class="panel-group">
    <el-col v-for="(item, index) in lineChartData" :key="index" :xs="8" :sm="8" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData(item.key,item.name)">
        <div v-if="item.name !== ''" class="card-panel-description">
          <div class="card-panel-text">
            {{ item.name }}
          </div>
          <count-to
            :start-val="0"
            :end-val="getValue(item.key)"
            :duration="2600"
            :decimals="item.decimals"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
import {
// getEvmInfo
} from '@/api/user'
export default {
  components: {
    CountTo
  },
  props: {
    groupData: {}
  },
  data() {
    return {
      lineChartData: [{
        key: 'totalUsers',
        name: '人数'
      },
      {
        key: 'totalCreators',
        name: 'NFT数'
      },
      {
        key: 'totalCollections',
        name: '跨链转移记录'
      }
      ]
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
    },
    getValue(key) {
      const value = parseFloat(this.groupData[key])
      console.log(value)
      if (value) {
        return value
      }
      return 0
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

    .card-panel:hover {
      color: #ff704a;
      // .card-panel-text:hover {
      //   color: #ff704a;
      // }
    }

    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      border-radius: 5px;
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
        // margin-left: 0px;
        // padding-left: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        padding-left: 10PX;
        flex: 1;
        // background-color: red;

        .card-panel-text {
          line-height: 18px;
          // color: rgba(0, 0, 0, 0.45);
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
