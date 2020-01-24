export function recentPosts(start, end) {
    let posts = this.$site.pages
        .filter(p => {
            return p.path.indexOf("/posts/") >= 0;
        })
        .sort((a, b) => {
            let aDate = new Date(a.firstCreated).getTime();
            let bDate = new Date(b.firstCreated).getTime();
            return bDate - aDate;
        })
        .slice(start, end);
    return posts;
}