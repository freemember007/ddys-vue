<template lang="jade">
.container
  .header
    .f2
      | 查报告
  .content.has-header
  tabs(currentTab="report")
</template>


<script>
import tabs from '../../component/tabs.vue'

export default {
  components: {
    tabs
  },
  data () {
    return {
    }
  }
}
</script>