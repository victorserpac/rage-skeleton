#!/bin/bash

clear
echo "============== Initializing git... ================="
rm -rf .git #'Reset' Git
git init

#Installing modules
clear
echo "==> Installing Gulp and dependencies..."
cd src/
sudo npm install
cd ../


clear
echo "==> Removing stuff you don't want..."
rm README.md
rm init.sh

# Remove .gitkeep
rm ./assets/css/.gitkeep
rm ./assets/fonts/.gitkeep
rm ./assets/images/icons/.gitkeep
rm ./assets/images/src/.gitkeep
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
