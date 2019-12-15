---
sidebar: auto
---
# Tags

<div>
<template>
    <TagCloud/>
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