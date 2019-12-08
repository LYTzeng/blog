<template>
  <div>
    <ul>
      <li v-for="post in recentPosts()">
        <a :href="post.path">{{post.title}}</a>
        <p>{{post.frontmatter.description}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { recentPosts } from '../util/recentPosts'

export default {
  data() {
    return {};
  },
  computed: {

  },
  methods: {
    recentPosts
  }
};
</script>

<style lang="stylus">
ul
  list-style-type: none
.home li > a
  text-decoration none
  color $textColor
  font-size: 2.2rem;
</style>