<!-- 模板文件用于初始化 -->
<template>
  <div>
    1111111
    <ElementLayout1></ElementLayout1>
  </div>
</template>

<script>
  
import ElementLayout1 from './ElementLayout1.vue'
  
export default {
  name: 'ShowModule',
  props: {
    msg: String
  },
  components: {
    ElementLayout1
  }
}
</script>

<style scoped>

</style>
