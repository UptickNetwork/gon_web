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
          name: "Total Users",
        },
        {
          key: "totalCreators",
          iconClass: "peoples",
          name: "Total Creators",
        },
        {
          key: "totalCollections",
          iconClass: "component",
          name: "Total Collections",
        },
        {
          key: "",
          iconClass: "",
          name: "",
        },
        {
          key: "totalUniqueNfts",
          iconClass: "shopping",
          name: "Unique Nfts",
        },
        {
          key: "currentListingUniqueNfts",
          iconClass: "shopping",
          name: "Current Listing Unique Nfts",
        },
        {
          key: "totalNfts",
          iconClass: "shopping",
          name: "Total Nfts",
        },
        {
          key: "currentListingNfts",
          iconClass: "shopping",
          name: "Current Listing Total Nfts",
        },
        {
          key: "airdroppedNfts",
          iconClass: "shopping",
          name: "Airdropped Nfts",
        },
        {
          key: "totalListedNftsTimes",
          iconClass: "chart",
          name: "Total Listed Nfts Times",
        },
        {
          key: "transactionTimes",
          iconClass: "chart",
          name: "Transaction Times",
        },
        {
          key: "transactionTimesLaunchpad",
          iconClass: "chart",
          name: "Transaction Times Launchpad",
        },
        {
          key: "transactionTimesLaunchpadLrc",
          iconClass: "chart",
          name: "Transaction Times Launchpad(LRC)",
        },
        {
          key: "transactionTimesLaunchpadEth",
          iconClass: "chart",
          name: "Transaction Times Launchpad(ETH)",
        },
        {
          key: "transactionTimesMarketplace",
          iconClass: "chart",
          name: "Transaction Times Marketplace",
        },
        {
          key: "transactionTimesMarketplaceLrc",
          iconClass: "chart",
          name: "Transaction Times Marketplace(LRC)",
        },
        {
          key: "transactionTimesMarketplaceEth",
          iconClass: "chart",
          name: "Transaction Times Marketplace(ETH)",
        },
        {
          key: "transactionTokensLaunchpad",
          iconClass: "money",
          name: "Transaction Tokens Launchpad",
          decimals: 4
        },
        {
          key: "transactionTokensMarketplace",
          iconClass: "money",
          name: "Transaction Tokens Marketplace",
          decimals: 4
        },
        {
          key: "transactionTokensLaunchpadLrc",
          iconClass: "money",
          name: "Transaction Tokens Launchpad(LRC)",
          decimals: 4
        },
        {
          key: "transactionTokensMarketplaceLrc",
          iconClass: "money",
          name: "Transaction Tokens Marketplace(LRC)",
          decimals: 4
        },
        {
          key: "transactionTokensLaunchpadEth",
          iconClass: "money",
          name: "Transaction Tokens Launchpad(ETH)",
          decimals: 4
        },
        {
          key: "transactionTokensMarketplaceEth",
          iconClass: "money",
          name: "Transaction Tokens Marketplace(ETH)",
          decimals: 4
        },
      ],

    }
  },
  filters: {
    formentNumber(value) {

      // parseFloat(groupData[item.key])
      return  parseFloat(value)
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
