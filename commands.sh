#!/bin/bash
git init

echo "node_modules" >> .gitignore
echo "DS_Store" >> .gitignore

npm init -y
npm install --save express

npm install --save-dev mocha chai
npm pkg set 'type'='module'
npm pkg set 'scripts.dev'='node --watch-path=src src/main.js'
npm pkg set 'scripts.start'='node src/main.js'
npm pkg set 'scripts.test'='mocha'

mkdir src test
touch src/main.js
touch src/routes.js
touch src/converter.js

touch test/converter.spec.js
touch test/routes.spec.js

