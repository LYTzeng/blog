cd /mnt/d/blog/
git add .
git commit -m "191209-vuepress-blog-1.md"
git pull
git push

yarn docs:build
/bin/cp -af /mnt/d/blog/docs/.vuepress/dist/ /mnt/d/static_blog/lytzeng.github.io/
cd /mnt/d/static_blog/lytzeng.github.io
git add .
git commit -m "191209-vuepress-blog-1.md"
git pull
git push