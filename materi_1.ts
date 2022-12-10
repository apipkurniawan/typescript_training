// setup config :

// 1. node
//    node -v
// 2. npm
//    npm -v
// 3. package.json
//    npm init                            => mengenerate package.json file
// 4. typescript
//    npm install typescript --save-dev   => dev
//    npm install -g typescript           => global
// 5. nodemon
//    npm install -g nodemon
// 6. tsconfig.json
//    tsc --init                          => mengenerate tsconfig.json file
//           "allowJs": true
//           "outDir": "./build"          => utk menyimpan hasil build ts -> js
// 7. run dev
//    tsc -w                              => utk lihat hasil compile
//    nodemon ./build/index.js            => utk run dev auto refresh
//    node ./build/index.js               => utk run dev tidak auto refresh
