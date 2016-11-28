<template lang="jade">
.container
  .header
    .f2
      | 查报告
  .content.has-header
  Tabs(currentTab="report")
</template>


<script>
import Tabs from '../../component/tabs.vue'

export default {
  components: {
    Tabs
  },
  data () {
    return {
    }
  }
}
</script>