import express from 'express';

const app = express();
const port = 5000;

// App object has a few methods:
// 1. HTTP GET
// 2. HTTP POST
// 3. HTTP PUT
// 4. HTTP DELETE
// 5. HTTP HEAD
// 6. HTTP CONNECT
// 7. HTTP OPTIONS
// 8. HTTP TRACE
// 9. HTTP PATCH
// 10. app.all() - This method is used to load middleware functions at a path for all HTTP request methods.


// Take 2 args:
// 1. The route
// 2. The callback function if the route is hit


// Basic route
app.get('/basic-get', (req, res) => {
  res.send('GET request to the homepage');
});

app.post('/basic-post', (req, res) => {
  res.send('POST request to the homepage');
});

app.put('/basic-put', (req, res) => {
  res.send('PUT request to the homepage');
});

app.delete('/basic-delete', (req, res) => {
  res.send('DELETE request to the homepage');
});

app.head('/basic-head', (req, res) => {
  res.send('HEAD request to the homepage');
});

app.connect('/basic-connect', (req, res) => {
  res.send('CONNECT request to the homepage');
});

app.options('/basic-options', (req, res) => {
  res.send('OPTIONS request to the homepage');
});

app.trace('/basic-trace', (req, res) => {
  res.send('TRACE request to the homepage');
});

app.patch('/basic-patch', (req, res) => {
  res.send('PATCH request to the homepage');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
