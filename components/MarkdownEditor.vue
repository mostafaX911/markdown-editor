<template>
  <div class="editor">
    <textarea
      v-model="code"
      class="code"
      :style="{ color: actualSkin.color }"
    ></textarea>
    <div class="result" :inner-html.prop="$md.render(code)"></div>
  </div>
</template>
<script>
// import $md from 'markdown-it'
// import markdownit from 'markdown-it'
// import markdownitSub from 'markdown-it-sub'

export default {
  name: 'MarkdownEditor',

  data() {
    return {
      appTitle: 'VueDown Editor',
      code: '# Hello dev \n\n---\n\nType **here** some markdown! ',
      isSeen: true,
      isSettings: false,
      isFull: false,
      isUpdating: false,
      actualSkin: {
        color: '#0cc',
        background: 'rgba(0, 204, 204, .4)',
        wall: 'rgba(0, 204, 204, .15)',
      },
    }
  },
  computed: {
    // compiledOutpot() {
    //   return $md.render(this.code)
    // },
  },
  methods: {},
}
</script>
<style lang="scss">
.editor {
  position: relative;
  min-height: 100%;
  background: rgba($black, 0.2);
  display: flex;
  overflow: hidden;
  .code,
  .result,
  .settings {
    width: 50%;
    padding: 1rem;
  }
  .code {
    resize: none;
    border: none;
    font-family: $code-font;
    background: rgba($black, 0.8);
    outline: none;
    transition: color 0.4s;
  }
  .result {
    background: $white;
    hr {
      border: none;
      border-bottom: 1px solid rgba($black, 0.2);
    }
    img {
      max-width: 100%;
      height: auto;
    }
    ul,
    ol {
      margin-left: 0;
      padding-left: 20px;
      li {
        margin-left: 0;
      }
    }
  }
}
</style>
