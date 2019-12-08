---
sidebar: auto
---
# Tags

<div>
<template>
  <div class="tags">
    <router-link
      v-for="tag in Object.keys(tags)"
      :key="tag"
      :to="{ path: `/tags/${tag}`}">
      <Badge type="transparent">
        <div :style="'font-size: ' + tags[tag].length*0.8 + 'em'">
            {{tag}}<b class="tagcount"> {{tags[tag].length}}</b>
        </div>
      </Badge>
    </router-link>
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
.tags 
  & > span
    margin-right 10px
  & > a:hover
    border-bottom: 2px solid #24d1f0;
    margin-bottom: -3px;


</style>
</div>