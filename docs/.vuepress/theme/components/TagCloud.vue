<template>
  <div id="tagcloud"></div>
</template>

<script>
import { pandaSyntaxArr } from "../util/pandaColorSyntax"

export default {
  methods: {
    wcList() {
      let tags = {};
      for (let page of this.getPages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index];
          if (tag in tags) {
            tags[tag].push(page);
          } else {
            tags[tag] = [page];
          }
        }
      }
      let wcList = [];
      let tagKeys = Object.keys(tags);
      for (let key of tagKeys) {
        wcList.push([key, tags[key].length]);
      }
      return wcList;
    }
  },
  mounted: function() {
    let wcList = this.wcList();
    $(function() {
      WordCloud($("#tagcloud")[0], {
        list: wcList,
        gridSize: Math.round((16 * $("#tagcloud").width()) / 1024),
        weightFactor: 16,
        fontFamily: "Noto Sans TC Regular",
        rotateRatio: 0,
        rotationSteps: 0,
        backgroundColor: "transparent",
        color: function(word) {
            console.log(wcList);
            var colorArr = pandaSyntaxArr;
            return colorArr[Math.floor(Math.random() * pandaSyntaxArr.length)];
        },
        click: function(item) {
          window.location = "/tags/" + item[0] + ".html"
        }
      });
    });
  },
  computed: {
    getPages() {
      return this.$site.pages;
    }
  }
};
</script>

<style lang="stylus">
#tagcloud 
  width 100%
  height 50vh
#tagcloud > span:hover
  cursor pointer
</style>