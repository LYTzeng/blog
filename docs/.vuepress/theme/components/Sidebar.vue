<template>
  <aside class="sidebar">
    <div class="bio bio-sidebar">
      <div class="img-holder">
        <img src="https://avatars3.githubusercontent.com/u/30722178?s=460&v=4"/>
      </div>
      <p class="name">Oscar Tseng</p>
      <div style="border-bottom: 1px solid hsl(0, 0%, 30%); border-top: 1px solid hsl(0, 0%, 30%);">
        <div style="display: inline-block; padding: 0 10px; border-right: 1px solid hsl(0, 0%, 30%); margin: 5px 0">
          <router-link :to="{ path: `/categories/`}">
            <span style="display: block; font-family: 'Noto Sans TC Medium'; font-size: 20px">{{ numOfPosts }}</span>
            <span>Posts</span>
          </router-link>
        </div>
        <div style="display: inline-block; padding: 0 10px; margin: 5px 0">
          <router-link :to="{ path: `/tags/`}">
            <span style="display: block; font-family: 'Noto Sans TC Medium'; font-size: 20px">{{ numOfTags }}</span>
            <span>Tags</span>
          </router-link>
        </div>
      </div>
      <div style="display: flex; justify-content: center; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid hsl(0, 0%, 30%);">
        <span style="width: 32px; height: 32px;">
          <a href="https://github.com/LYTzeng" target="_blank" rel="noopener" title="Github"><svg fill="#e6e6e6" focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path fill-rule="evenodd" d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45 3 3 0 0 0 4.08 1.16 2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76 5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7 5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z"></path></svg></a>
        </span>
        <span style="width: 32px; height: 32px;">
          <a href="https://www.linkedin.com/in/li-yen-tseng/" target="_blank" rel="noopener" title="Linkedin"><svg fill="#e6e6e6" focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.21 4H5.79A1.78 1.78 0 0 0 4 5.73V26.2a1.77 1.77 0 0 0 1.79 1.73h20.42A1.77 1.77 0 0 0 28 26.2V5.73A1.78 1.78 0 0 0 26.21 4zm-15.1 20.41H7.59V13h3.52zm-1.72-13a2.07 2.07 0 0 1-2.07-2.02 2 2 0 0 1 2.07-2.07 2.07 2.07 0 0 1 0 4.13zm15.09 12.93H21v-5.58c0-1.33 0-3.06-1.86-3.06S17 17.16 17 18.63v5.65h-3.56V13h3.32v1.5h.07a3.72 3.72 0 0 1 3.39-1.86c3.59 0 4.26 2.4 4.26 5.45z"></path></svg></a>
        </span>
        <span style="width: 32px; height: 32px;">
          <a href="mailto:oscar217b@gmail.com" target="_blank" rel="noopener" title="mail"><svg fill="#e6e6e6" focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78 6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z"></path><title>Email</title></svg></a>
        </span>
        <span style="width: 32px; height: 32px;">
          <a href="/feed.rss" target="_blank" rel="noopener" title="rss" type="application/rss+xml"><svg fill="#e6e6e6" focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M8 18c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm22-4h-2C28 13 19 4 8 4V2c12.1 0 22 9.9 22 22z"></path><path d="M22 24h-2c0-6.6-5.4-12-12-12v-2c7.7 0 14 6.3 14 14z"></path><title>Rss</title></svg></a>
        </span>
      </div>
    </div>
    <NavLinks />
    <slot name="top" />
    <SidebarLinks :depth="0" :items="items" />
    <div class="sidebar-links">
      <p class="sidebar-heading">
        <span>近期文章</span>
      </p>
      <ul>
        <li v-for="post in recentPosts()">
          <a :href="post.path" class="sidebar-link recentTitle">{{post.title}}</a>
        </li>
      </ul>
    </div>
    <div class="sidebar-links">
      <p class="sidebar-heading">
        <span>Tags</span>
      </p>
      <Tags class="sidebar-tags sidebar-link"/>
    </div>
    <slot name="bottom" />
  </aside>
</template>

<script>
import SidebarLinks from "@theme/components/SidebarLinks.vue";
import NavLinks from "@theme/components/NavLinks.vue";
import { recentPosts } from "../util/recentPosts";
import Tags from "@theme/components/Tags.vue"

export default {
  name: "Sidebar",

  components: { SidebarLinks, NavLinks, Tags },

  props: ["items"],

  methods: {
    recentPosts
  },

  computed: {
    numOfPosts() {
      return this.$site.pages.filter(p => {
        return p.path.indexOf("/posts/") >= 0;
      }).length;
    },
    numOfTags() {
      let tags = {};
      let tagsCount = 0;
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index];
          if (tag in tags) {
            continue
          } else {
            tags[tag] = [page];
            tagsCount++;
          }
        }
      }
      return tagsCount;
    }
  }
};
</script>

<style lang="stylus">
.sidebar {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
    color: $textColor;
  }

  & > .nav-links {
    display: none
    border-bottom: 1px solid $sideBarBgColor;
    padding: 0.5rem 0 0.75rem 0;

    a {
      font-weight: 600;
    }

    .nav-item, .repo-link {
      display: block;
      line-height: 1.25rem;
      font-size: 1.1em;
      padding: 0.5rem 0 0.5rem 1.5rem;
    }
  }

  & > .sidebar-links {
    padding: 1.5rem 0;

    & > li > a.sidebar-link {
      font-size: 1.1em;
      line-height: 1.7;
      font-weight: bold;
    }

    & > li:not(:first-child) {
      margin-top: 0.75rem;
    }

    & .recentTitle {
      padding-left: 2rem;
      font-size: 1em;
      color hsl(0, 0%, 80%)
    }

    & .tags {
      padding-left: 2rem;
      font-size: 1em;
      color hsl(0, 0%, 80%)
    }

    span {
      margin: 5px 0;
    }
  }

  .sidebar-heading {
    font-family "Noto Sans TC Regular"
  }
}

@media (max-width: $MQMobile) {
  .sidebar {
    .nav-links {
      display: block;

      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after {
        top: calc(1rem - 2px);
      }
    }

    & > .sidebar-links {
      padding: 1rem 0;
    }
  }
}
</style>
