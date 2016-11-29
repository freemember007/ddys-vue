<template lang="jade">
  .header
    .left(onclick="window.history.go(-1)")
      Icon(name="angle-left",v-if="hasLeft",scale=2,color="#666")
    .title
      | {{title}}
    .right
</template>


<script>
import Icon from 'vue-awesome/components/Icon.vue'
import 'vue-awesome/icons/angle-left'
export default {
  name: 'Header',
  components: {
    Icon
  },
  data () {
    return {
    }
  },
  props: [
    'title',
    'hasLeft'
  ]
}
</script>


<style lang="stylus">
// @import '../app_variables.styl'
.header
  position fixed
  background #fff
  z-index 999
  top 0
  left 0
  right 0
  height 48px
  border-bottom 1px solid #ddd
  display flex
  justify-content around
  align-items center
.title
  font-size 18px
  flex 70
.left
  flex 15
  display flex
  justify-content center
  align-items center
.right
  flex 15
  display flex
  justify-content center
  align-items center
</style>