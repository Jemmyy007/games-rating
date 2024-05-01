const http = require('http');
const path = require("path")
const mimeTypes = require("./appModules/http-utils/mime-types")
const staticFile = require("./appModules/http-utils/static-file")
const fs = require('fs');
const { readFile } = require('./files/read-file');
const mainRouteController = require("./controllers/main")
const defaultRouteController = require("./controllers/default")
const gameRouteController = require("./controllers/game")
const voteRouteController = require("./controllers/vote")

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case "/":
            mainRouteController(res, "/index.html", ".html");
      break;
      case "/game":
            gameRouteController(res);
      break;
      case "/vote":
            voteRouteController(req, res);
      break;
        default:
            defaultRouteController(res, url);
  }
  }); 

server.listen(3005); 


readFile(); 

console.log(__filename); // /usr/local/project/app.js
console.log(__dirname); // /usr/local/project 

