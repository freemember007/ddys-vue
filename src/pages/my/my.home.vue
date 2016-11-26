<template lang="jade">
.container
  .header
    .f2
      | 我的
  .content.has-header
  tabs(currentTab="my")
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