<template lang="jade">
  .tabs
      router-link.tab(:class="{'active':currentTab==='book'}",to="/bookHome")
        img(src="http://placekitten.com/24/24")
        .f5 挂号
      router-link.tab(:class="{'active':currentTab==='consult'}",to="/consultHome")
        img(src="http://placekitten.com/24/24")
        .f5 咨询
      router-link.tab(:class="{'active':currentTab==='report'}",to="/reportHome")
        img(src="http://placekitten.com/24/24")
        .f5 查报告
      router-link.tab(:class="{'active':currentTab==='my'}",to="/myHome")
        img(src="http://placekitten.com/24/24")
        .f5 我的
</template>


<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },
  props: [
    'currentTab'
  ]
}
</script>


<style lang="stylus">
.tabs
  display flex
  position fixed
  width 100%
  height 58px
  bottom 0
  background #fff
  border-top 1px #ddd solid
.tab
  display flex
  flex-direction column
  justify-content center
  align-items center
  flex 25
  &.active
    color #2ECC40
</style>