yarn build
mv ./build/* .
git branch -D gh-pages
git checkout --orphan gh-pages
git add .
git commit -m "update build"
git push origin --force
git checkout master