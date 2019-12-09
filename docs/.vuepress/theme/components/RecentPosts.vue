<template>
  <div>
    <ul>
      <li v-for="post in recentPosts()">
        <a :href="post.path">{{post.title}}</a>
        <p style="margin-top: 0; color: #bdbdbd;">
          <svg fill="#ececec" focusable="false" preserveAspectRatio="xMidYMid meet" style="display: inline-block; vertical-align: middle; will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M26 4.03h-4v-2h-2v2h-8v-2h-2v2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2zm0 22H6v-14h20zm0-16H6v-4h4v2h2v-2h8v2h2v-2h4z"></path><title>Calendar</title></svg>
          {{ post.lastUpdated }} 
          <svg fill="#ececec" focusable="false" preserveAspectRatio="xMidYMid meet" style="display: inline-block; vertical-align: middle; will-change: transform; padding-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M11.17 6l3.42 3.41.58.59H28v16H4V6h7.17m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H16l-3.41-3.41A2 2 0 0 0 11.17 4z"></path><title>Folder</title></svg>
          <router-link :to="{ path: `/categories/#${post.frontmatter.category}`}" style="display: inline; font-size:16px; padding-left: 0; padding-right: 0; color: #bdbdbd;">{{ post.frontmatter.category }} </router-link>
          <svg fill="#ececec" focusable="false" preserveAspectRatio="xMidYMid meet" style="display: inline-block; vertical-align: middle; will-change: transform; padding-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M18.52 30a3 3 0 0 1-2.12-.88L2.88 15.61A3 3 0 0 1 2 13.49V5a3 3 0 0 1 3-3h8.49a3 3 0 0 1 2.12.88l13.51 13.51a3 3 0 0 1 0 4.25l-8.48 8.48a3 3 0 0 1-2.12.88zM5 4a1 1 0 0 0-1 1v8.49a1 1 0 0 0 .3.71l13.51 13.51a1 1 0 0 0 1.41 0l8.49-8.49a1 1 0 0 0 0-1.41L14.2 4.3a1 1 0 0 0-.71-.3H5z"></path><path d="M10 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2z"></path><title>Tag</title></svg>
          <span v-for="tag in post.frontmatter.tags">{{tag}}&nbsp;&nbsp;</span>
        </p>
        <p>{{post.frontmatter.description}}<a :href="post.path" style="display: inline; font-size:16px; padding-left: 0;"> ... Read more</a></p>
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