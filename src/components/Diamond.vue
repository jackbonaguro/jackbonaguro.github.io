<template>
  <div id="diamond" :style="style">
  </div>
</template>

<script>
export default {
  name: 'diamond',
  props: ['top', 'left', 'scale', 'color', 'z'],
  computed: {
    style() {
      return `top: ${this.top}; left: ${this.left};`
      + `width: ${this.scale}; height: ${this.scale};`
      + `background-color: ${this.color}; z-index: ${this.z};`
      + 'border-radius: 10px;';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #diamond {
    position: absolute;
    transform: rotate(45deg);
  }
</style>
