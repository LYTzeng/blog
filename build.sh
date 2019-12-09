yarn docs:build
/bin/cp -af /mnt/d/blog/docs/.vuepress/dist/ /mnt/d/static_blog/lytzeng.github.io/
cd /mnt/d/static_blog/lytzeng.github.io
git add .
git commit -m ""
git pull
git push