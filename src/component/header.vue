<template lang="jade">
  .header
      .title
        {{title}}
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
    'title'
  ]
}
</script>


<style lang="stylus">
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