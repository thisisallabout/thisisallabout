# minion
Full front-end set for [thisisallabout](https://thisisallabout.com) original revision. Note: The latest revision uses React and Node app for isomophic server-side rendering, thus, not based on this code base.

## Libraries
* webpack/babel
* lit-html for rendering
* a node "server.js" app for url routing (deprecated along with Github Pages hosting; originally used for server hosting)
* a node app "stuart" for backend database api (for internal editorial functions) in ./stuart/.

## How to run the website (now deprecated; the original commit [here](https://github.com/toddoh/thisisallabout/commit/1e7ecb230054e0113cde85fedfb1edf86f6a7557))
1. Install all npm dependencies listed in pacakage.json
2. npm run watch or npm run build
4. node server.js
5. Go to localhost:3000.

## Modules
It loads appropriate js module by dynamic import using the hash parameter in the URL. Depending on the section depth, ?type= parameter is used for loading nested js module. (i.e. /#today?type=gallery)

## Compatibility

The website is not compatible with Internet Explorer 11 or older.

## License

* MIT License

## Maintainer

Todd Oh (toddstonefieldoh@gmail.com) [twitter](https://twitter.com/tstonefieldoh)