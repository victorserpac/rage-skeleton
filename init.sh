#!/bin/bash

echo "Initializing structure..."
mkdir ./assets
mkdir ./assets/css
mkdir ./assets/fonts
mkdir ./assets/images
mkdir ./assets/js
mkdir ./assets/js/components
mkdir ./assets/js/vendors
mkdir ./assets/sass
mkdir ./assets/sass/base
mkdir ./assets/sass/components
mkdir ./assets/sass/helpers
mkdir ./assets/sass/helpers/mixins
mkdir ./assets/sass/helpers/placeholders
mkdir ./assets/sass/layout
mkdir ./assets/sass/pages
mkdir ./assets/sass/vendors
mkdir ./src

echo "Copying files..."
# Copy files
# ============================

# JS
cp ./template/assets/js/main.js ./assets/js/main.js

# JS Vendors
cp ./template/assets/js/vendors/modernizr-2.6.2.min.js ./assets/js/vendors/modernizr-2.6.2.min.js
cp ./template/assets/js/vendors/vs-placeholder.js ./assets/js/vendors/vs-placeholder.js


# Sass Base
cp ./template/assets/sass/base/_base.scss ./assets/sass/base/_base.scss
cp ./template/assets/sass/base/_reset.scss ./assets/sass/base/_reset.scss

# Sass Mixins
cp ./template/assets/sass/helpers/mixins/_image-background.scss ./assets/sass/helpers/mixins/_image-background.scss
cp ./template/assets/sass/helpers/mixins/_img-responsive.scss ./assets/sass/helpers/mixins/_img-responsive.scss
cp ./template/assets/sass/helpers/mixins/_responsive.scss ./assets/sass/helpers/mixins/_responsive.scss
cp ./template/assets/sass/helpers/mixins/_sprite-icons.scss ./assets/sass/helpers/mixins/_sprite-icons.scss
cp ./template/assets/sass/helpers/mixins/_text-emphasis.scss ./assets/sass/helpers/mixins/_text-emphasis.scss
cp ./template/assets/sass/helpers/mixins/_vendor-prefixes.scss ./assets/sass/helpers/mixins/_vendor-prefixes.scss

# Sass Placeholders
cp ./template/assets/sass/helpers/placeholders/_center-absolute.scss ./assets/sass/helpers/placeholders/_center-absolute.scss
cp ./template/assets/sass/helpers/placeholders/_clear.scss ./assets/sass/helpers/placeholders/_clear.scss
cp ./template/assets/sass/helpers/placeholders/_span-helper.scss ./assets/sass/helpers/placeholders/_span-helper.scss

# Sass Helpers
cp ./template/assets/sass/helpers/_config.scss ./assets/sass/helpers/_config.scss
cp ./template/assets/sass/helpers/_mixins.scss ./assets/sass/helpers/_mixins.scss
cp ./template/assets/sass/helpers/_placeholders.scss ./assets/sass/helpers/_placeholders.scss

# Sass
cp ./template/assets/sass/README.md ./assets/sass/README.md
cp ./template/assets/sass/style.scss ./assets/sass/style.scss

# Source
cp ./template/src/config.rb ./src/config.rb
cp ./template/src/README.md ./src/README.md

# Root
cp ./template/.editorconfig ./.editorconfig
cp ./template/.gitignore ./.gitignore
cp ./template/index.html ./index.html


# echo "Grunt or Gulp? (Answer with the number)"
# select runner in "Grunt" "Gulp" "Neither"; do
#    case $runner in
#       "Grunt"   ) cp ./template/grunt/Gruntfile.js ./Gruntfile.js; cp ./template/grunt/package.json ./package.json; break;;
#       "Gulp"    ) cp ./template/gulp/gulpfile.js ./gulpfile.js; cp ./template/gulp/package.json ./package.json; break;;
#       "Neither" ) cp ./template/package.json ./package.json; break;;
#    esac
# done

echo "Removing stuff you don't want..."
rm -rf .git
rm -rf template
rm README.md
rm init.sh

echo "Done! ✔"
