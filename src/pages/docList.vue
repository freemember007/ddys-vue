<template lang="jade">

ul.w10.absolute.has-header
  
  li.flex.align-start.p3.border-bottom(
    v-for = "(doc,index) in docList",
    track-by = "docbookDocId"
  ) 

    // 医生头像
    .w2
      img.fit(:src = "doc.docAvatar")

    // 右侧信息
    .w8.pl2
      .flex.justify-between.align-start.mb2
        // 医生姓名与职称
        div
          h3.mb2 {{doc.docName}}
          h4
            | {{doc.docDegree}}
            | {{doc.docTitle}}
        // 预约按钮    
        .btn.btn-sm(@click="alterDoc(index)") 预约
      // 医生介绍
      p.small.dark.multi-break
        | {{doc.docGoodat}}
</template>


<script>
function fetchDocList (store) {
  return store.dispatch('FETCH_DOC_LIST', {
    bookDeptId: store.state.route.params.deptId
  })
}

export default {
  name: 'doc-list',
  components: {
  },
  data() {
    return {
      currentDoc: 0
    }
  },
  preFetch: fetchDocList,
  computed: {
    docList () {
      return this.$store.state.book.doclist
    }
  },
  beforeMount () {
    // if (this.$root._isMounted) {
    //   fetchDocList(this.$store)
    // }
    fetchDocList(this.$store)
  },
  methods: {
    alterDoc (index) {
      console.log(index)
      this.currentDoc = index
    }
  }
}
</script>