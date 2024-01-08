<template>
  <div id="app-content">
    <Heading />
    <Editor />
  </div>
</template>

<script>
import Editor from '@/components/MarkdownEditor.vue'
import Heading from '@/components/PageHeading.vue'
export default {
  name: 'IndexPage',
  components: {
    Editor,
    Heading,
  },
}
</script>
<style lang="scss" scoped>
#app-content {
  min-height: 100vh;
  padding: 5rem 0;
  transition: background 0.4s;
  &.full {
    padding: 0;
    #app {
      width: 100%;
      height: calc(100vh - 40px);
      padding: 0;
      font-size: 100%;
    }
  }
}
</style>
