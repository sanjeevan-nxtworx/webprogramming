const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

http
  .createServer((req, res) => {
    console.log("REQ: ", req.url);
    console.log(req.url.substring(0, 5));
    if (req.url === "/now") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ now: new Date() }));
      res.end();
    } else if (req.url == "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<html><body><h1>This is contact page</h1></body></html>");
      res.end();
    } else if (req.url.substring(0, 6) === "/item?") {
      var q = url.parse(req.url, true).query;

      let msg = q.name + " " + q.age;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<html> <h2>${msg}</h2></html>`);
      res.end();
    } else if (req.url === "/about") {
      let pathname = url.parse(req.url).pathname;

      console.log(`Request for ${pathname} received`);
      fs.readFile("docs/" + pathname.substr(1) + ".html", (err, data) => {
        if (err) {
          console.error(err);

          res.writeHead(404, { "Content-Type": "text/plain" });
          res.write("404 - file not found");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data.toString());
        }

        res.end();
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("Hello there");
      res.end();
    }
  })
  .listen(8080);

console.log("server running on port 8080");
