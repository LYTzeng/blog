<template>
  <div class="tag-posts">
    <ul style="list-style-type: none">
      <li v-for="page in thisTag">
        <router-link :to="{ path: page.path}">
          <h1>{{page.title}}</h1>
          <p>{{page.frontmatter.description}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GetPagesByTag",
  computed: {
    thisTag() {
      let tags = {};
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index];
          if (tag in tags) {
            tags[tag].push(page);
          } else {
            tags[tag] = [page];
          }
        }
      }
      return tags[this.$page.title];
    }
  }
};
</script>

<style lang="stylus" scoped>
.tag-posts > ul li  a
  text-decoration none !important
  text-decoration-color none
  color $textColor
.tag-posts > ul > li
  padding 20px 0
</style>