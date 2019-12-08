export function recentPosts() {
    let posts = this.$site.pages
        .filter(p => {
            return p.path.indexOf("/posts/") >= 0;
        })
        .sort((a, b) => {
            let aDate = new Date(a.frontmatter.published).getTime();
            let bDate = new Date(b.frontmatter.published).getTime();
            let diff = aDate - bDate;
            if (diff < 0) return -1;
            if (diff > 0) return 1;
            return 0;
        })
        .slice(0, 5);
    return posts;
}