<template>
  <div class="my-header" :style="{ background: backgroundColor, color: color }">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      tyep: String, // type：传过来的类型
      required: true // required声明必须传值过来
    },
    backgroundColor: String,

    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
