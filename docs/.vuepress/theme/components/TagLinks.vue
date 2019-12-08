<template lang="html">
  <div class="taglinks">
    <router-link :key="category" :to="{ path: `/categories/#${category}` }">
    <div style="display: inline;"><svg fill="#14cdef" focusable="false" preserveAspectRatio="xMidYMid meet" style="display: inline-block; vertical-align: middle; will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M11.17 6l3.42 3.41.58.59H28v16H4V6h7.17m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H16l-3.41-3.41A2 2 0 0 0 11.17 4z"></path><title>Folder</title></svg></div>
    {{ category }}</router-link>
    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/tags/${tag}`}">
      <Badge :text="tag"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TagLinks",
  computed: {
    category () {
    
      console.log(this.$page)
      return this.$page.frontmatter.category
    },
  }
}
</script>

<style lang="stylus">
.taglinks > a
  padding-right 5px
  font-family 'Noto Sans TC Medium'
</style>