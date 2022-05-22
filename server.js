const http = require("http");
const port = 3000;

const routes = {
  '/': 'All books',
  '/books': 'Books by name',
  '/authors': 'Books by author',
  '/publishing-companies': 'Books by publishing companies',
  '/about': 'Information about api',
}

const server = http.createServer((req,res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(routes[req.url]);
});

server.listen(port, () => {
  console.log(`Server listening: http://localhost:${port}`);
})