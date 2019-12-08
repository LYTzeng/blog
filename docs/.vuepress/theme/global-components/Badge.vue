<script>
export default {
  functional: true,
  props: {
    type: {
      type: String,
      default: 'tip'
    },
    text: String,
    vertical: {
      type: String,
      default: 'top'
    }
  },
  render (h, { props, slots }) {
    return h('span', {
      class: ['badge', props.type],
      style: {
        // verticalAlign: props.vertical
        verticalAlign: 'center'
      }
    }, props.text || slots().default)
  }
}
</script>

<style lang="stylus" scoped>
.badge
  display inline-block
  font-size 14px
  height 18px
  line-height 18px
  border-radius 3px
  padding 0 6px
  color white
  background-color #11ceef
  &.tip, &.green
    background-color #04a7c4
  &.error
    background-color #f5365c //#f66
  &.warning, &.warn, &.yellow
    background-color #fb6340
  &.transparent
    background-color transparent
  & + &
    margin-left 5px
</style>
