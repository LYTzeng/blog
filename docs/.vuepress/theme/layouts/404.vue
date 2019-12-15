<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">Take me home.</router-link>
    </div>
    <div class="pixiv">pixiv id: <a href="https://www.pixiv.net/artworks/60914916">60914916</a></div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="stylus" scoped>
.theme-container
  height 100vh
  width 100vw
  background-image linear-gradient(to bottom, #444, #fff),url("/404.jpg")
  background-repeat no-repeat
  background-position center
  background-size: cover
  background-blend-mode: multiply;
.pixiv
  display block
  position absolute 
  left 100vw
  top 100vh
  width 500px
  height 50px
  transform translate(-510px, -50px)
  text-align right
</style>