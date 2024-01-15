<template>
  <v-app-bar dense class="d-flex" elevation="0">
    <v-btn text @click="markdownH1">H1</v-btn>
    <v-btn text @click="markdownH2">H2</v-btn>
    <v-btn text @click="markdownH3">H3</v-btn>
    <v-btn text @click="markdownImage">Image</v-btn>
    <v-btn text @click="markdownVideo">Video</v-btn>
    <v-btn text @click="markdownFootnote">Footnote</v-btn>
    <v-btn text @click="markdownLink">Link</v-btn>
    <v-btn text @click="markdownTable">Table</v-btn>
    <v-btn text @click="markdownTablerow">Table row</v-btn>
  </v-app-bar>
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
    markdownFootnote() {
      this.$nuxt.$emit('markdownFootnote')
    },
    markdownVideo() {
      this.$nuxt.$emit('markdownVideo')
    },
    markdownImage() {
      this.$nuxt.$emit('markdownImage')
    },
    markdownLink() {
      this.$nuxt.$emit('markdownLink')
    },
    markdownTable() {
      this.$nuxt.$emit('markdownTable')
    },
    markdownTablerow() {
      this.$nuxt.$emit('markdownTablerow')
    },
    markdown2cols() {
      this.$nuxt.$emit('markdown2cols')
    },
    markdownH1() {
      this.$nuxt.$emit('markdownH1')
    },
    markdownH2() {
      this.$nuxt.$emit('markdownH2')
    },
    markdownH3() {
      this.$nuxt.$emit('markdownH3')
    },
  },
}
</script>
<style lang="scss"></style>
