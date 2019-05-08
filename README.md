# minion
Full front-end set for [thisisallabout](https://thisisallabout.com), a non-profit data journalism project.

## Libraries
* webpack/babel
* lit-html for rendering
* a node "server.js" app for url routing
* a node app "stuart" for backend database api (for internal editorial functions)

## How to run the website
1. Install all npm dependencies listed in pacakage.json
2. npm run watch or npm run build 
2-1. npm run build will create scripts loading necessary data files from a now-offline thisisallabout server. Make sure you edit the production dataset urls in /src/js/ to somewhere else that hosts the files in /data_publish_ready/.

3. node server.js
4. Go to localhost:3000.

## License

* MIT License

## Maintainer

Todd Oh (toddstonefieldoh@gmail.com) [twitter](https://twitter.com/_toddoh)