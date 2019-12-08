import TagLinks from './theme/components/TagLinks.vue'
import PageEdit from './theme/components/PageEdit.vue'
import GetPagesByTag from './theme/components/GetPagesByTag.vue'
import Categories from './theme/components/Categories.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('TagLinks', TagLinks)
  Vue.component('PageEdit', PageEdit)
  Vue.component('GetPagesByTag', GetPagesByTag)
  Vue.component('Categories', Categories)
}