<template>
  <div class="editor">
    <textarea
      id="code"
      v-model="code"
      class="code"
      :style="{ color: actualSkin.color }"
      @markdownFootnote="markdownFootnote"
      @markdownVideo="markdownVideo"
      @markdownImage="markdownImage"
      @markdownLink="markdownLink"
      @markdownTable="markdownTable"
      @markdownTablerow="markdownTablerow"
      @markdown2cols="markdown2cols"
      @markdownH1="markdownH1"
      @markdownH2="markdownH2"
      @markdownH3="markdownH3"
    ></textarea>
    <div class="result" :inner-html.prop="$md.render(code)"></div>
  </div>
</template>
<script>
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
  computed: {},
  created() {
    this.$nuxt.$on('markdownFootnote', () => {
      this.markdownFootnote()
    })
    this.$nuxt.$on('markdownVideo', () => {
      this.markdownVideo()
    })
    this.$nuxt.$on('markdownImage', () => {
      this.markdownImage()
    })
    this.$nuxt.$on('markdownLink', () => {
      this.markdownLink()
    })
    this.$nuxt.$on('markdownTable', () => {
      this.markdownTable()
    })
    this.$nuxt.$on('markdownTablerow', () => {
      this.markdownTablerow()
    })
    this.$nuxt.$on('markdown2cols', () => {
      this.markdown2cols()
    })
    this.$nuxt.$on('markdownH1', () => {
      this.markdownH1()
    })
    this.$nuxt.$on('markdownH2', () => {
      this.markdownH2()
    })
    this.$nuxt.$on('markdownH3', () => {
      this.markdownH3()
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('markdownFootnote')
    this.$nuxt.$off('markdownVideo')
    this.$nuxt.$off('markdownImage')
    this.$nuxt.$off('markdownLink')
    this.$nuxt.$off('markdownTable')
    this.$nuxt.$off('markdownTablerow')
    this.$nuxt.$off('markdown2cols')
    this.$nuxt.$off('markdownH1')
    this.$nuxt.$off('markdownH2')
    this.$nuxt.$off('markdownH3')
  },
  methods: {
    markdownFootnote() {
      this.code = this.code + '\n^[note]'
      document.getElementById('code').select()
    },
    markdownVideo() {
      this.code = this.code + '\n@[youtube](dQw4w9WgXcQ)'
      document.getElementById('code').select()
    },
    markdownImage() {
      this.code = this.code + '\n![imgname](imglink)'
      document.getElementById('code').select()
    },
    markdownLink() {
      this.code = this.code + '\n[linkname](link)'
      document.getElementById('code').select()
    },
    markdownTable() {
      this.code =
        this.code +
        '\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |'
      document.getElementById('code').select()
    },
    markdownTablerow() {
      this.code = this.code + '\n| Tables        | Are           | Cool  |'
      document.getElementById('code').select()
    },
    markdown2cols() {
      this.code =
        this.code +
        '\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |'
      document.getElementById('code').select()
    },
    markdownH1() {
      this.code = this.code + '\n# '
      document.getElementById('code').select()
    },
    markdownH2() {
      this.code = this.code + '\n## '
      document.getElementById('code').select()
    },
    markdownH3() {
      this.code = this.code + '\n### '
      document.getElementById('code').select()
    },
  },
}
</script>
<style lang="scss">
@import '~@/assets/variables.scss';
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
    table {
      border-collapse: collapse;
      width: 100%;
      th,
      td {
        border: 1px solid rgba($black, 0.2);
        padding: 0.5rem;
      }
    }
  }
}
</style>
