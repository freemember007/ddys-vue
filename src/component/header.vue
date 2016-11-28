<template lang="jade">
  .header
    //- Icon(name="angle-left")
    .title
      | {{title}}
</template>


<script>
// import Icon from 'vue-awesome/components/Icon.vue'
// import 'vue-awesome/icons/angle-left'
export default {
  name: 'Header',
  components: {
    // Icon
  },
  data () {
    return {
    }
  },
  props: [
    'title'
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
  text-align center
  vertical-align middle
  line-height 48px
.title
  font-size 18px
</style>