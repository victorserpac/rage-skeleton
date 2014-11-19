#!/bin/bash

clear
echo "============== Initializing git... ================="
rm -rf .git #'Reset' Git
git init

echo " ==> Initializing the package.json to Gulp, you can just press Enter for all inputs"
cd src/
sudo npm init #inciar projeto npm


#Installing modules
clear
echo "==> Installing Gulp and dependencies..."
sudo npm install gulp --save-dev #Gulp
sudo npm install gulp-jshint --save-dev #Gulp JSHint
sudo npm install gulp-concat --save-dev #Gulp Concat
sudo npm install gulp-uglify --save-dev #Gulp Uglify
sudo npm install gulp-rename --save-dev #Gulp rename
sudo npm install gulp-compass --save-dev #Gulp Compass
sudo npm install gulp-livereload --save-dev #Gulp LiveReload
sudo npm install gulp-autoprefixer --save-dev #Gulp Auto Prefixer
sudo npm install gulp-combine-media-queries --save-dev #Gulp Combine Media Queries
sudo npm install gulp-watch --save-dev #Gulp watch
cd ../


clear
echo "==> Removing stuff you don't want..."
rm README.md
rm init.sh

# Remove .gitkeep
rm ./assets/css/.gitkeep
rm ./assets/fonts/.gitkeep
rm ./assets/images/icons/.gitkeep
rm ./assets/js/components/.gitkeep
rm ./assets/js/vendors/.gitkeep
rm ./assets/sass/components/.gitkeep
rm ./assets/sass/layout/.gitkeep
rm ./assets/sass/pages/.gitkeep
rm ./assets/sass/vendors/.gitkeep

echo "==> Running Gulp..."
cd src/
gulp init
cd ..

echo "==> First commit..."
git add --all
git commit -m "Initial commit"

echo "******************** Tudo pronto! ✔ ********************"
