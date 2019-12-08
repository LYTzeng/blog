<template>
  <div class="tags">
    <span v-for="tag in Object.keys(tags)">
      <Badge :id="tag">
        <router-link :to="{ path: `/tags/${tag}`}">
          <div>{{tag}}
          <div class="tagcount">{{tags[tag].length}}</div></div>
        </router-link>
      </Badge>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
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
      return tags;
    }
  }
};
</script>

<style lang="stylus">
.tagcount {
  text-align: center;
  display: inline-block;
  width: 1.5em;
  
  background hsla(0, 0%, 0%, 15%)
}

.tags > span {
  padding-right: 6px;
  font-family: 'Noto Sans TC Medium';
}

.tags > a
  margin-left 12px
</style>