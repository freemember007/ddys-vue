<template lang="jade">
.container
  .header
    .f2
      | 我的
  .content.has-header
  Tabs(currentTab="my")
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