<template lang="jade">
  .container
    Header(title="挂号",hasLeft=false)
    .main
      //- 搜索区
      .my2.gb-white
        .mt4.mb2.f3.dark.text-center
          | 浙江卫计委官方指定预约挂号平台
        .p2.flex
          input.px2.pr4.w1.f4.bg-white.border.round(
            placeholder="搜索医院、医生直达",style="height:40px"
          )
      //- 按钮区
      .my2.flex.row(style="height:140px")
        router-link.w4.flex.xy-center.border-right(
          to="/bookHosList/0571"
        )
          | 按医院预约
        .w6.flex.column
          .w5.flex.xy-center.border-bottom
            | 按科室预约
          .w5.flex.row
            .w5.flex.xy-center.border-right
              | 在线咨询
            .w5.flex.xy-center
              | 名医号
      //- 热门医院
      .my2
        .mb2.p2.pl4.white.bg-primary
          | 热门医院
        .flex.row.justify-start.align-start.wrap
          .m2.py2.border-bottom(
            v-for="hos in hotHosList"
          )
            .dark.text-center
              | {{hos.yymc}}
      //- 热门科室
      .my2
        .mb2.p2.pl4.white.bg-primary
          | 热门科室
        .flex.row.justify-start.align-start.wrap
          .m2.py2.border-bottom(
            v-for="dept in hotDeptList"
          )
            .dark.text-center
              | {{dept.ksmc}}
    Tabs(currentTab="book")
</template>


<script>
import hotHosList from '../../json/book_home_hotHosList'
import hotDeptList from '../../json/book_home_hotDeptList'
import Tabs from '../../component/tabs.vue'
import Header from '../../component/header.vue'

export default {
  components: {
    Tabs,
    Header
  },
  data () {
    return {
      hotHosList,
      hotDeptList
    }
  },
  mounted () {
    // alert(hotHosJson[0].yymc)
  }
}
</script>