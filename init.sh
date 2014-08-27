#!/bin/bash

echo "Initializing git..."
rm -rf .git
rm -rf .gitignore
cp ./template/.gitignore ./.gitignore
git init

clear
echo "Initializing the project..."
sudo npm init
sudo npm install gulp-jshint --save-dev #Gulp JSHint
# sudo npm install gulp-sass --save-dev #Gulp Sass
sudo npm install gulp-concat --save-dev #Gulp Concat
sudo npm install gulp-uglify --save-dev #Gulp Uglify
sudo npm install gulp-rename --save-dev #Gulp rename
sudo npm install gulp-compass --save-dev #Gulp Compass


# echo "Grunt or Gulp? (Answer with the number)"
# select runner in "Grunt" "Gulp" "Neither"; do
#    case $runner in
#       "Grunt"   ) cp ./template/grunt/Gruntfile.js ./Gruntfile.js; cp ./template/grunt/package.json ./package.json; break;;
#       "Gulp"    ) cp ./template/gulp/gulpfile.js ./gulpfile.js; cp ./template/gulp/package.json ./package.json; break;;
#       "Neither" ) cp ./template/package.json ./package.json; break;;
#    esac
# done

clear
echo "Removing stuff you don't want..."
rm -rf template
rm README.md
rm init.sh

# Remove .gitkeep
rm ./assets/css/.gitkeep
rm ./assets/fonts/.gitkeep
rm ./assets/images/.gitkeep
rm ./assets/js/components/.gitkeep
rm ./assets/sass/components/.gitkeep
rm ./assets/sass/layout/.gitkeep
rm ./assets/sass/pages/.gitkeep
rm ./assets/sass/vendors/.gitkeep

echo "First commit..."
git add --all
git commit -m "Initial commit"

echo "Done! ✔"
