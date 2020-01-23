<template>
  <div class="page-edit">
    <div class="last-updated" v-if="showLastUpdated" style="padding-left: 8px" title="最後更新">
      <span class="prefix"><svg fill="#ececec" focusable="false" preserveAspectRatio="xMidYMid meet" style="display: inline-block; vertical-align: middle; will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M2 27H30V29H2zM25.41 9a2 2 0 0 0 0-2.83L21.83 2.59a2 2 0 0 0-2.83 0l-15 15V24h6.41zm-5-5L24 7.59l-3 3L17.41 7zM6 22V18.41l10-10L19.59 12l-10 10z"></path><title>Calendar</title></svg></span>
      <span class="time">{{ lastUpdated }}</span>
    </div>
    <div class="last-updated" v-if="firstCreated" title="建立時間">
      <span class="prefix"><svg fill="#ececec" focusable="false" preserveAspectRatio="xMidYMid meet" style="display: inline-block; vertical-align: middle; will-change: transform;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M26 4.03h-4v-2h-2v2h-8v-2h-2v2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2zm0 22H6v-14h20zm0-16H6v-4h4v2h2v-2h8v2h2v-2h4z"></path><title>Calendar</title></svg></span>
      <span class="time">{{ firstCreated }}</span>
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
    firstCreated () {
      return this.$page.firstCreated
    },
    showLastUpdated () {
      return (this.$page.lastUpdated == this.$page.firstCreated) ? false : true
    }
  },
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
