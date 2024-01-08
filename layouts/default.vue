<template>
  <div id="app">
    <v-app>
      <Nuxt />
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>
<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  font-family: $primary-font;
  font-size: 16px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
}
#app {
  width: 80rem;
  max-width: 100%;
  height: 400px;
  margin: 0 auto;
  padding: 0 1rem;
  font-size: 100%;
  transition: all 0.4s;
}
</style>
