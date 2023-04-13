const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (req.url === '/main.css') {
    fs.readFile(path.join(__dirname, 'main.css'), (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  } else if (req.url === '/main.js') {
    fs.readFile(path.join(__dirname, 'main.js'), (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

/*
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const PORT = 8080;
const HOST = '0.0.0.0';
const server = http.createServer((req, res) => {
  
  if (req.url === '/') {
    
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) throw err;
      
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (req.url.match('main.css')) {
    
    const cssPath = path.join(__dirname, req.url);
    const fileStream = fs.createReadStream(cssPath, 'UTF-8');
    res.writeHead(200, {'Content-Type': 'text/css'});
    fileStream.pipe(res);
  }
  else if (req.url.match('main.js')) {
    const jsPath = path.join(__dirname, req.url);
    const fileStream = fs.createReadStream(jsPath, 'UTF-8');
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    fileStream.pipe(res);
  }
});

/*
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
*/