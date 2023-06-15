const http = require('http');
const url = require('url');

http
  .createServer(function (req, res) {
    res.writeHead(200);
    const urlObj = url.parse(req.url, true);
    if (urlObj.pathname === '/subtract') {
      res.write(`result: ${urlObj.query.a - urlObj.query.b}`);
    } else {
      res.write('Hello JavaScript !!!');
    }
    res.end();
  })
  .listen(3000);
console.log('server started at http://localhost:3000');
