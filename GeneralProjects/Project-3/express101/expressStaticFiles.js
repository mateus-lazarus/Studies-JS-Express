import express from 'express';
import path from 'path';

const app = express();
const port = 5000;

// Serve static files from the "public" directory
  // use() method is used to load middleware functions at a path for all HTTP request methods.
    // use() takes 2 args:
    // 1. The path
    // 2. The callback function
  // express.static() is a built-in middleware function in Express. It serves static files and is based on serve-static.
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});