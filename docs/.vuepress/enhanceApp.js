import TagLinks from './theme/components/TagLinks.vue'
import PageEdit from './theme/components/PageEdit.vue'
import GetPagesByTag from './theme/components/GetPagesByTag.vue'
import Categories from './theme/components/Categories.vue'
import Disqus from './theme/components/Disqus.vue'
import TagCloud from './theme/components/TagCloud.vue'
import Badges from './theme/components/Badges.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer 
}) => {
  if (!isServer) {
    // Register jQuery
    window.$ = window.jQuery = require('jquery')
    // Register jQuery plugins
    require('jquery-visible')
    // Register WordCloud
    window.WordCloud = require('wordcloud') 
  }
  Vue.component('TagLinks', TagLinks)
  Vue.component('PageEdit', PageEdit)
  Vue.component('GetPagesByTag', GetPagesByTag)
  Vue.component('Categories', Categories)
  Vue.component('Disqus', Disqus)
  Vue.component('TagCloud', TagCloud)
  Vue.component('Badges', Badges)
}
