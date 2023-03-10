<template>
  <div v-loading.fullscreen.lock="fullscreenLoading" class="dashboard-editor-container">
    <div
      style="display: flex; justify-content: center; border-radius: 4px; background-color: #1890ff; height: 40px; margin-bottom: 20px; color: white; align-items: center;"
    >
      {{ address }}
    </div>

    <div>
      <div v-for="(item, index1) in chainListInfo" :key="index1" class="list">
        <div v-if="item.sourceChannel != null">
          <div
            style="border-radius: 4px; background-color: #1890ff; height: 40px; padding-left: 20px; padding-top: 10px; color: white;"
          >
            {{ getMap(item.sourceChannel) }} -> {{ getMap(item.destinationchannel) }}
          </div>
          <el-row>
            <el-col :span="12" style="padding: 20px;">
              <div class="chainName">From</div>
              <!-- <div class="chain-id mt-3 mb-3">{{ item.sourceChainId  }}</div> -->
              <div class="title-font-12">Channel:{{ item.sourceChannel }}</div>
              <div class="title-font-12">ClassID:{{ item.sourceClassID }}</div>
              <div class="title-font-12">Height:{{ item.sourceHeight }}</div>
              <div class="title-font-12">Port:{{ item.sourcePort }}</div>
              <div class="title-font-12">Time:{{ timestampToDate(item.sourceTime) }}</div>
              <div class="title-font-12">Txid:{{ item.sourceTxid }}</div>
            </el-col>
            <el-col :span="12" style="padding: 20px;">
              <div class="chainName">To</div>
              <!-- <div class="chain-id mt-3 mb-3">{{ item.destinationChainId }}</div> -->
              <div class="title-font-12">Channel:{{ item.destinationchannel }}</div>
              <div class="title-font-12">ClassID:{{ item.destinationClassID }}</div>
              <div class="title-font-12">Height:{{ item.destinationHeight }}</div>
              <div class="title-font-12">Port:{{ item.destinationPort }}</div>
              <div class="title-font-12">Time:{{ timestampToDate(item.destinationTime) }}</div>
              <div class="title-font-12">Txid:{{ item.destinationTxid }}</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getIBCTransactionList
} from '@/api/user'
import {
  timestampToDateTime
} from '@/utils/index'

export default {
  name: 'AccountDetail',
  components: {

  },
  data() {
    return {
      fullscreenLoading: false,
      groupData: {},
      address: '',
      chainListInfo: []
    }
  },
  mounted() {
    console.log(this.$route.params.address)
    this.address = this.$route.params.address
    this.getIBCTransactionList(this.address)
    this.initMap()
  },
  methods: {
    timestampToDate(value) {
      return timestampToDateTime(value)
    },
    getIBCTransactionList(search) {
      const params = {
        search: search,
        page: this.page,
        size: 1000
      }
      this.fullscreenLoading = true
      getIBCTransactionList(params).then(response => {
        this.fullscreenLoading = false
        console.log(response.data)
        this.chainListInfo = response.data
      })
    },

    getMap(key) {
      // debugger
      if (key != null) {
        return this.packageInfoMap.get(key)
      }
    },
    initMap() {
      this.packageInfoMap = new Map([
        ['channel-22', 'IRISnet'],
        ['channel-23', 'IRISnet'],
        ['channel-24', 'IRISnet'],
        ['channel-25', 'IRISnet'],
        ['channel-17', 'IRISnet'],
        ['channel-19', 'IRISnet'],
        ['channel-0', 'IRISnet'],
        ['channel-1', 'IRISnet'],
        ['channel-207', 'Stargaze'],
        ['channel-208', 'Stargaze'],
        ['channel-211', 'Stargaze'],
        ['channel-213', 'Stargaze'],
        ['channel-203', 'Stargaze'],
        ['channel-206', 'Stargaze'],
        ['channel-209', 'Stargaze'],
        ['channel-210', 'Stargaze'],
        ['channel-89', 'Juno'],
        ['channel-90', 'Juno'],
        ['channel-93', 'Juno'],
        ['channel-94', 'Juno'],
        ['channel-86', 'Juno'],
        ['channel-88', 'Juno'],
        ['channel-91', 'Juno'],
        ['channel-92', 'Juno'],
        ['channel-3', 'Uptick'],
        ['channel-4', 'Uptick'],
        ['channel-6', 'Uptick'],
        ['channel-12', 'Uptick'],
        ['channel-7', 'Uptick'],
        ['channel-13', 'Uptick'],
        ['channel-24', 'Omniflix'],
        ['channel-25', 'Omniflix'],
        ['channel-44', 'Omniflix'],
        ['channel-45', 'Omniflix'],
        ['channel-46', 'Omniflix'],
        ['channel-47', 'Omniflix'],
        ['channel-41', 'Omniflix'],
        ['channel-42', 'Omniflix']
      ])
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

  .title-font-12 {
    padding-top: 10px;
    white-space: nowrap;
    /* 禁止文本换行 */
    overflow: hidden;
    /* 隐藏溢出部分 */
    text-overflow: ellipsis;
    /* 在结尾处添加省略号 */
    margin-right: 20px;
    margin-top: 2px;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 1px;
    color: #000000;
  }

  .chain-id {
    height: 10px;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: 1px;
    color: #ff99ff;
  }

  .chainName {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: 1px;
    color: #000000;
  }

  .line {
    margin: 25px 0;
    height: 1px;
    border: solid 1px #666666;
  }

  .font-14 {
    font-family: Helvetica;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #000000;
  }

  input[class="txInput"] {
    width: 300px;
    height: 36px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-left: 34px;
  }

  input[class="analyzeInput"] {
    width: 600px;
    height: 36px;
    background-color: #ffffff;
    border-radius: 5px;
  }

  img {
    width: 13px;
    height: 8px;
    cursor: pointer;
  }

  .txid {
    font-family: Helvetica;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 52px;
    letter-spacing: 0px;
    color: #ffffff;
  }

  .contant {
    justify-content: center;
    margin-top: 60px;

    .box {
      // width: 800px;
      height: 100vh;

      // border: 1px solid red;
      .search {
        .left {
          // width: 500px;
          position: relative;

          .choose {
            width: 109px;
            height: 100px;
            background-color: #ffffff;
            border-radius: 5px;
            position: absolute;
            left: 0px;
            top: 50px;
            z-index: 200;

            .address {
              margin: 22px 15px 0 23px;
            }
          }
        }

        .right {
          // width: 300px;
          position: relative;

          .btn {
            position: absolute;
            right: 0;
            width: 125px;
            height: 40px;
            background-color: #9530fd;
            border-radius: 19px;
            font-family: Helvetica;
            font-size: 15px;
            font-weight: bold;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
          }

          .chainInfo {
            position: absolute;
            left: 0;
            top: 45px;
            width: 140px;
            height: 178px;
            background-color: #ffffff;
            border-radius: 5px;
            z-index: 200;
          }
        }
      }
    }

    .analyze {
      position: relative;

      .btn {
        position: absolute;
        right: 0;
        width: 125px;
        height: 40px;
        background-color: #9530fd;
        border-radius: 19px;
        font-family: Helvetica;
        font-size: 15px;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #ffffff;
      }

      .dialog {
        position: absolute;
        right: 0;
        top: 50px;
        width: 600px;
        height: 210px;
        background-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(#1890ff, #1890ff);
        background-blend-mode: normal, normal;
        box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.09);
        border-radius: 5px;

        img {
          width: 30px;
          height: 31px;
          position: absolute;
          right: 8px;
          top: 10px;
        }

        .contants {
          margin: 44px 40px 0 41px;

          .copy {
            width: 75px;
            height: 31px;
            background-color: #9530fd;
            border-radius: 15px;
            font-family: Helvetica;
            font-size: 13px;
            font-weight: bold;
            font-stretch: normal;
            line-height: 15px;
            letter-spacing: 0px;
            color: #ffffff;
          }

          .hash {
            font-family: Helvetica;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 15px;
            letter-spacing: 0px;
            color: #000000;
          }

          .result {
            margin-top: 33px;
            font-family: Helvetica;
            font-size: 14px;
            font-weight: bold;
            font-stretch: normal;
            line-height: 15px;
            letter-spacing: 0px;
            color: #000000;
          }

          .denomid {
            font-family: Helvetica;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 15px;
            letter-spacing: 0px;
            color: #000000;
          }
        }
      }
    }

    .totalList {
      margin-top: 40px;
      width: 800px;
      overflow-y: hidden;

      .list {

        .listContant {
          margin-top: 15px;
          width: 100%;
          // border: 1px solid red;
          width: 775px;

          border-radius: 5px;
          margin-bottom: 15px;

          .baseInfo {
            width: 100%;

            .left {
              width: 50%;
              // border: 1px solid blue;
              padding: 22px 0 0 40px;
            }

            .right {
              width: 50%;
              // border: 1px solid green;
              padding: 22px 0 0 40px;
            }
          }
        }

      }

    }

    .title {
      background-color: #1890ff;
      height: 50px;

    }

    .totalList:hover {
      overflow-y: auto;
    }

    .totalList::-webkit-scrollbar {
      width: 1px;

      //  background-color: #ffffff !important; /*(透明)*/
    }

    .totalList::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      background-color: #ffffff !important;
      /*(透明)*/
    }

    .totalList::-webkit-scrollbar-thumb {
      background-color: #ffffff !important;
    }

  }
</style>
