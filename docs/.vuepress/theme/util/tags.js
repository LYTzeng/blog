export default {
    data() {
        return {
            arts: [],
            tags: [],
            activeTag: ''
        }
    },
    computed: {
        list() {
            if (this.activeTag === '') return this.arts

            return this.arts.filter(item => {
                const tags = item.frontmatter.tags || ''
                if (tags == '') return false

                const tagsArr = tags.split(",").filter(i => i !== "")
                return tagsArr.indexOf(this.activeTag) != -1
            })
        }
    },
    created() {
        // arts
        this.arts = this.$site.pages.filter(item => {
            return !item.frontmatter || !item.frontmatter.isNoPage
        })

        // 所有标签
        const tags = this.$site.pages.map(item => {
            return item.frontmatter && item.frontmatter.tags || ""
        })
        const tagsArr = tags.join(",").split(",").filter(i => i !== "")
        this.tags = [...new Set(tagsArr)]
    },
    methods: {
        handleChangeTag(item) {
            this.activeTag = item
        }
    }
}