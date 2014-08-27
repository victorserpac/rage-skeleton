#!/bin/bash

echo "Initializing git..."
rm -rf .git
rm -rf .gitignore
cp ./template/.gitignore ./.gitignore
git init

echo "Initializing the project..."
sudo npm init
npm install gulp-jshint --save-dev #Gulp JSHint
npm install gulp-sass --save-dev #Gulp Sass
npm install gulp-concat --save-dev #Gulp Concat
npm install gulp-uglify --save-dev #Gulp Uglify
npm install gulp-rename --save-dev #Gulp rename


# echo "Grunt or Gulp? (Answer with the number)"
# select runner in "Grunt" "Gulp" "Neither"; do
#    case $runner in
#       "Grunt"   ) cp ./template/grunt/Gruntfile.js ./Gruntfile.js; cp ./template/grunt/package.json ./package.json; break;;
#       "Gulp"    ) cp ./template/gulp/gulpfile.js ./gulpfile.js; cp ./template/gulp/package.json ./package.json; break;;
#       "Neither" ) cp ./template/package.json ./package.json; break;;
#    esac
# done

echo "Removing stuff you don't want..."
rm -rf template
rm README.md
rm init.sh

echo "First commit..."
git add --all
git commit -m "Initial commit"

echo "Done! ✔"
