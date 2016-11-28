<template lang="jade">
.container
  .header
    .f2
      | 咨询
  .content.has-header
  Tabs(currentTab="consult")
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