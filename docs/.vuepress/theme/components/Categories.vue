<template>
  <div class="categories" v-if="categories">
    <div class="tilesWrap">
      <div v-for="cat in Object.keys(categories)" :id="cat" class="category-card-container">
        <div class="category-card">
          <div class="category-name">{{ cat }}</div>
          <router-link v-for="page of categories[cat]" :to="{ path: `${page.path}`}">
            <div class="cat-page-title">{{ page.title }}</div>
            <p>{{ page.frontmatter.description }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  computed: {
    categories() {
      let categories = {};
      let posts = this.$site.pages.filter(p => {
        return p.path.indexOf("/posts/") >= 0;
      });
      this.$page["headers"] = [];
      for (let post of posts) {
        const cat = post.frontmatter.category;
        let postArr = [post];
        if (cat in categories) categories[cat].push(post);
        else {
          categories[cat] = postArr;
          this.$page["headers"].push({
            level: 2,
            slug: cat,
            title: cat
          });
        }
      }
      return categories;
    }
  },
  mounted: function() {
    $(".category-card").addClass("cardAfter")
  },
  beforeCreate: function() {
    this.categories()
  }
};
</script>

<style lang="stylus">
@require '../styles/categories.styl';
</style>
