<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import {
  getDashboradHome
} from '@/api/user'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }

    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
</style>
