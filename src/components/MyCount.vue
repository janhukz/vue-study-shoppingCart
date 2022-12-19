<template>
  <div class="my-counter">
    <button
      type="button"
      class="btn btn-light"
      :disabled="data.goods_count === 1"
      @click="data.goods_count--"
    >
      -
    </button>
    <input
      type="number"
      class="form-control inp"
      v-model.number="data.goods_count"
    />
    <button type="button" class="btn btn-light" @click="data.goods_count++">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  // 控制用户手动输入，不能输入负数，首先需要使用watch侦听器，侦听数据发生变化，然后触发handler函数执行
  watch: {
    data: {
      deep: true,
      handler(newval) {
        // console.log(newval,oldval)
        //  控制手动输入不为负数
        if (newval.goods_count <= 0) newval.goods_count = ""
        // 控制最高不超过99
        if (newval.goods_count > 99) newval.goods_count = 99
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>
