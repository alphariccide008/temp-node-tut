const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the home page');
  } else if (req.url === '/about') {
    res.end('This is the about page');
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you're looking for</p>
      <a href="/">Go Home</a>
    `);
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
  