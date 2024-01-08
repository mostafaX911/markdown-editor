<template>
  <header>
    <button @click="addimage">Image</button>
    <button>Video</button>
    <button>Description</button>
    <button>Quote</button>
    <button>Footnote</button>
    <button>Link</button>
    <button>Button</button>
    <button>File</button>
    <button>2 Columns</button>
    <button>Table</button>
    <button>Table row</button>
  </header>
</template>
<script>
export default {
  name: 'PageHeading',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    addimage() {
      this.$emit('addimage')
    },
  },
}
</script>
<style lang="scss">
header {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  height: $foot-height;
  line-height: $foot-height;
  text-align: center;
  font-size: 0.75em;
  color: rgba($black, 0.8);
  background: $light-gray;
  border-radius: 5px 5px 0 0;
  .buttons {
    position: absolute;
    top: 6px;
    left: 22px;
    width: 8px;
    height: 8px;
    background: $orange;
    border-radius: 50%;
    box-shadow: -12px 0 0 $red, 12px 0 0 $green;
  }
}
</style>
