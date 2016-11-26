<template lang="jade">
.container
  .header
    .f2
      | 咨询
  .content.has-header
  tabs(currentTab="consult")
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