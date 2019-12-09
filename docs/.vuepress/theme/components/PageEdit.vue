<template>
  <div class="page-edit">
    <div class="last-updated" v-if="lastUpdated">
      <span class="prefix"><svg fill="#ececec" focusable="false" preserveAspectRatio="xMidYMid meet" style="display: inline-block; vertical-align: middle; will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M26 4.03h-4v-2h-2v2h-8v-2h-2v2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2zm0 22H6v-14h20zm0-16H6v-4h4v2h2v-2h8v2h2v-2h4z"></path><title>Calendar</title></svg></span>
      <span class="time">{{ lastUpdated }}</span>
    </div>
  </div>
</template>
<script>
import isNil from 'lodash/isNil'
import { endingSlashRE, outboundRE } from '../util'

export default {
  name: 'PageEdit',
  computed: {
    lastUpdated () {
      return this.$page.lastUpdated
    },
  },

  methods: {

  }
}
</script>
<style lang="stylus">
@require '../styles/wrapper.styl'

.page-edit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  overflow auto

  .last-updated
    float right
    font-size 0.9em
    .prefix
      font-weight 500
      color lighten($textColor, 25%)
    .time
      font-weight 400
      color #aaa

@media (max-width: $MQMobile)
  .page-edit .last-updated
      font-size 0.8em
      float none
      text-align left

</style>
