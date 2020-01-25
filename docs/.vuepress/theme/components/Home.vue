<template>
  <main class="home" aria-labelledby="main-title">
    <div class="bio" style="width: 80%; padding-left:10%; padding-right: 10%;">
      <div class="img-holder">
        <img src="https://avatars3.githubusercontent.com/u/30722178?s=460&v=4"/>
      </div>
      <p class="name">Oscar Tseng</p>
      <div style="display: flex; justify-content:center; padding-top: 10px; margin: 0">
        <span>
          <a href="https://github.com/LYTzeng" target="_blank" rel="noopener" title="Github"><svg fill="#e6e6e6" focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path fill-rule="evenodd" d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45 3 3 0 0 0 4.08 1.16 2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76 5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7 5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z"></path></svg></a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/li-yen-tseng/" target="_blank" rel="noopener" title="Linkedin"><svg fill="#e6e6e6" focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.21 4H5.79A1.78 1.78 0 0 0 4 5.73V26.2a1.77 1.77 0 0 0 1.79 1.73h20.42A1.77 1.77 0 0 0 28 26.2V5.73A1.78 1.78 0 0 0 26.21 4zm-15.1 20.41H7.59V13h3.52zm-1.72-13a2.07 2.07 0 0 1-2.07-2.02 2 2 0 0 1 2.07-2.07 2.07 2.07 0 0 1 0 4.13zm15.09 12.93H21v-5.58c0-1.33 0-3.06-1.86-3.06S17 17.16 17 18.63v5.65h-3.56V13h3.32v1.5h.07a3.72 3.72 0 0 1 3.39-1.86c3.59 0 4.26 2.4 4.26 5.45z"></path></svg></a>
        </span>
        <span>
          <a href="mailto:oscar217b@gmail.com" target="_blank" rel="noopener" title="mail"><svg fill="#e6e6e6" focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78 6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z"></path><title>Email</title></svg></a>
        </span>
        <span>
          <a href="/rss.xml" target="_blank" rel="noopener" title="rss" type="application/rss+xml"><svg fill="#e6e6e6" focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M8 18c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm22-4h-2C28 13 19 4 8 4V2c12.1 0 22 9.9 22 22z"></path><path d="M22 24h-2c0-6.6-5.4-12-12-12v-2c7.7 0 14 6.3 14 14z"></path><title>Rss</title></svg></a>
        </span>
        <span>
          <a href="https://netlab.csie.ntut.edu.tw" target="_blank" rel="noopener" title="NTUT Netlab"><img src="/Netlab.svg" style="height: 32px; width: auto"/></a>
        </span>
      </div>
      <Content class="theme-default-content custom short-aboutme" />
    </div>
    <RecentPosts />
  </main>

</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
import RecentPosts from "@theme/components/RecentPosts.vue";

export default {
  components: { NavLink, RecentPosts },

  computed: {
    data() {
      return this.$page.frontmatter;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    },
  },
};


</script>

<style lang="stylus">
@require '../styles/bio.styl'

.home 
  padding: $navbarHeight 2rem 0
  max-width: 960px
  margin: 0px auto
  display: block
  li
    margin 30px
    padding 10px
    background-color hsl(0, 0%, 24%)
    box-shadow 2px 2px 16px hsl(0, 0%, 18%)
    a
      font-size 28px
      display inline-block
    a:hover
      color #11cdef
    a, p
      padding 0 25px

@media (max-width: $MQMobileNarrow)
  .home
    padding-left: .5rem
    padding-right: .5rem
    ul
      padding-left 0
      li
        margin 5px
        padding 5px
        background-color hsl(0, 0%, 24%)
        box-shadow 3px 3px 12px hsl(0, 0%, 15%)
        a
          font-size 24px
        a, p
          padding 0 15px
</style>
