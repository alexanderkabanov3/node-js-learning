const fs = require('fs');
const http = require('http');

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  // overview page
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(tempOverview);

  if (req.url === '/' || req.url === '/overview') {
    //products page
  } else if (req.url === '/products') {
    res.end('You are on products page');

    //API
  } else if (req.url === '/api') {
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(data);

    //not found
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(3000, '127.0.0.1', () => console.log('server has been ran'));
