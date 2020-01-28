let ogprefix = 'og: http://ogp.me/ns#';
const feed_options = {
    image: 'http://lytzeng.github.io/logo.png',
    favicon: 'http://lytzeng.github.io/logo.svg',
    canonical_base: 'http://lytzeng.github.io',
    posts_directories: [
        '/posts/',
    ],
    count: 100,
};
const robots_options = {
    host: 'http://lytzeng.github.io',
    sitemap: '/sitemap.xml',
}

module.exports = {
    extend: '@vuepress/theme',
    resolve: {
        alias: {
            '@posts': '/posts/'
        }
    },
    title: 'Oscar\'s Pathways',
    themeConfig: {
        nav: [
            { text: 'Categories', link: '/categories/' },
            { text: 'Tags', link: '/tags/' },
            { text: 'About', link: '/about/' },
        ],
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        logo: '/logo.svg',

    },
    base: '/',
    head: [
        // SEO thing
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['meta', { name: 'theme-color', content: '#333333' }],
        ['meta', { prefix: ogprefix, property: 'og:title', content: 'Oscar\'s Pathways' }],
        ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
        ['meta', { prefix: ogprefix, property: 'og:url', content: 'https://lytzeng.github.io' }],
        ['meta', { prefix: ogprefix, property: 'og:image', content: '/logo.png' }],
        ['meta', { prefix: ogprefix, property: 'og:article:author', content: 'Li-Yen Tseng' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/logo.png` }],
        ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#333333' }],
        ['meta', { name: 'msapplication-TileColor', content: '#333333' }],
        ['meta', { name: 'google-site-verification', content: 'luVocIl3165-z3eRtc2ux4f0_QqyqMiauRI-fD0GoJ0' }],
    ],
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/plugin-last-updated'],
        ['@vuepress/google-analytics', {
            ga: 'UA-154635266-1'//Google Analytics ID
        }],
        ['vuepress-plugin-first-created'],
        ['feed', feed_options],
        ['robots', robots_options],
        ['canonical', {
            baseURL: 'http://lytzeng.github.io',
        }],
        ['img-lazy'],// Lazy loading
    ],

}
