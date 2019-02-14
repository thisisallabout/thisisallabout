# minion

## Technical details
It renders thisisallabout backend data and published clustering data files with rich visualizations. 

## Stacks
* webpack
* lit-html for rendering
* a node "server.js" app for url routing
* a node app "stuart" for backend database api (for internal editorial functions)

## How to run the website
1. Install all npm dependencies listed in pacakage.json
2. npm run watch or npm run build 
2-1. npm run build will create scripts loading necessary data files from a now-offline thisisallabout server. Make sure you edit the production dataset urls in /src/js/ to somewhere else that hosts the files in /data_publish_ready/.

3. node server.js
4. Go to localhost:3000.

## Copyright
* Data file and clustering result: MIT License. Owned by THISISALLABOUT (Seungyun Todd Oh).
