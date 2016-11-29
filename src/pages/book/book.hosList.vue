<template lang="jade">
.container
  Header(title="选择医院",hasLeft=true)
  ul.has-header.pt2.w10
    li(v-for="hos in hosList",:key="hos.yyid")
      router-link.flex.bg-white.py4.px2.border-bottom(:to="'/deptList/' + hos.bookHosId")
        // 医院图片
        .w3
          img.fit(:src="hos.hosPic")

        // 右部区域
        .w7.pl2
          h3.mb2.lh1 {{hos.hosShortname}}
          h4.mb2.gray {{hos.hosLevel}}
          h4.gray {{hos.hosAddress}}

</template>

<script>
import bookApi from '../../utils/bookApi.js'
import Header from '../../component/header.vue'

export default {
  components: {
    Header
  },
  data () {
    return {
      hosList: []
    }
  },

  mounted () {
    this.initData()
  },

  methods: {
    initData: function () {
      bookApi('ddyy.book.hos.area.list', {
        areaCode: this.$route.params.areaId
      }).then((res) => {
        // console.log(res.data.list)
        this.hosList = res.data.list
      })
    }
  }
  
}
</script>