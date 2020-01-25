<template>
  <main class="page">
    <slot name="top" />
    <Content class="theme-default-content" />
    <PageNav v-bind="{ sidebarItems }" />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
$page-max-width = 900px

.page-edit 
  margin 0
  padding 0
  max-width $page-max-width

@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
  ul
    list-style disc
    li > ul
      list-style circle
  li a
    color rgb(17, 205, 239)
  strong
    font-family 'Noto Sans TC Medium'

@media (min-width: $MQNarrow)
  .theme-default-content:not(.custom)
    max-width $page-max-width !important
    padding 2rem 5% 2rem 10%
</style>
