<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="footerCheck"
        v-model="isAll"
      />
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{allPrice}}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">
      结算 ( {{ countAll }} )
    </button>
  </div>
</template>

<script>
// 目标: 全选
// 1. v-model关联全选-复选框(v-model后变量计算属性)
// 2. 页面(视图层)v(true) -> 数据层(变量-) 计算属性(完整写法)
// 3. 把全选 true/false同步给所有小选框选中状态上
export default {
  props: {
    arr: {
      type: Array
    }
  },
  // 计算属性 computed properities，本质是方法，当属性用
  // 计算属性所依赖的数据发生改变时它们才会重新求值
  computed: {
    // 会发生变化的变量
    isAll: {
      // 形参bool是isAll变量的值,这里是复选框的选中状态,是个bool值
      set(bool) {
        this.$emit('selAll', bool)
      },
      get() {
        // 测试数组每一项是否满足条件，不满足则给isAll返回false
        // 也就是小选框必须全选后,isALL === true
        return this.arr.every((obj) => obj.goods_state === true)
      }
    },
    // 当计算属性只需要get时可以简写
    countAll() {
      return this.arr.reduce((sum, obj) => {
        if (obj.goods_state === true) {
          sum += obj.goods_count
        }
        return sum
      }, 0)
    },
    allPrice(){
      return this.arr.reduce((sum, obj) => {
        if (obj.goods_state){
          sum += obj.goods_count * obj.goods_price
        }
        return sum;
      }, 0)
    }
  }
}
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>
