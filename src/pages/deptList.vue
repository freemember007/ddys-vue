<template lang="jade">

.flex.w10.bottom0
  mt-header(
    title = '点点医生'
  )

  // 一级科室
  ul.w4.has-header.overflow-y.bg
    li.fit.border-bottom.border-lighter.border-dashed.text-center.py4(
      v-for = "(dept,index) in deptList",
      track-by = "dept.deptCode",
      @click = "alterDept(index)",
      :class = "{'bg-white': index === currentDept}"
    ) 
      h3 {{dept.deptName}}

  // 二级科室
  ul.w6.overflow-y
    li.border-bottom.border-dashed.text-center(
      v-for = "childDept in deptList[currentDept].deptList",
      track-by = "childDept.bookDeptId"
    )
      router-link(:to = "'/docList/'+ childDept.bookDeptId")
        .block.py4 {{childDept.deptName}}

</template>


<script>
import { Header, Button, Tabbar, TabItem } from 'mint-ui/lib/button'

function fetchDeptList (store) {
  return store.dispatch('FETCH_DEPT_LIST', {
    hosId: store.state.route.params.hosId
  })
}

export default {
  name: 'dept-list',
  components: {
    mtHeader: Header
  },
  data() {
    return {
      currentDept: 0
    }
  },
  computed: {
    deptList () {
      console.log(2222,this.$store.state.book.deptlist);
      return this.$store.state.book.deptlist
    },
  },
  preFetch: fetchDeptList,
  beforeMount () {
//    if (this.$root._isMounted) {
//      fetchDeptList(this.$store)
//    }
      fetchDeptList(this.$store)
  },
  methods: {
    alterDept (index) {
      console.log(index)
      this.currentDept = index
    }
  }
}
</script>