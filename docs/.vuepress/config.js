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
            // {
            //     text: 'Frontend', items: [
            //         { text: 'Vue', link: '/posts/frontend/Vue/' },
            //         { text: '#', link: '#' },
            //     ],
            // },
        ],
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        logo: '/logo.svg',
        repo: 'https://github.com/LYTzeng/lytzeng.github.io.git',
        repoLabel: 'GitHub',
        docsRepo: 'https://github.com/LYTzeng/lytzeng.github.io.git',
        docsDir: '/',

    },
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/plugin-last-updated'],
        // ['@vuepress/google-analytics', {
        //     ga: '*********'//你的Google Analytics ID
        // }],
    ]
}