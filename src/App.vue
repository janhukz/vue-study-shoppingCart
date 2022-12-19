<template>
  <div>
    <Header title="购物车" backgroundColor="" color=""></Header>
    <div id="goods">
      <Goods v-for="obj in list" :key="obj.id" :data="obj"></Goods>
    </div>
    <Footer @selAll="selAllFn" :arr="list"></Footer>
  </div>
</template>

<script>
import Header from './components/MyHeader.vue'
import Goods from './components/MyGoods.vue'
import Footer from './components/MyFooter.vue'

export default {
  data() {
    return {
      list: []
    }
  },
  components: {
    Header,
    Goods,
    Footer
  },
  created() {
    this.$axios({
      url: '/api/cart'
    })
      .then((res) => {
        console.log(res.data.list)
        return (this.list = res.data.list)
      })
      .catch((e) => {
        console.log(e.message)
      })
  },
  methods: {
    selAllFn(bool) {
      // 逻辑：给goods_state赋值为bool
      this.list.forEach(obj => obj.goods_state = bool)
    }
  }
}
</script>

<style scoped>
#goods {
  padding-top: 45px;
}
</style>
