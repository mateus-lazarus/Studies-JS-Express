// Node js is the language
// Express is the framework and is unopinionated for many decisions (which is good and bad at the same time)
// The engine made by google is V8 interpreter

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// An app is the express function creationApplication() inside the express module invoked
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// An app is the express function creationApplication() inside the express module invoked
const app = express();

// serve up static files from the public directory
app.use(express.static('public'));

// And all is a method and it takes 2 args:
// 1. The route
// 2. The callback function if the route is hit

app.all('/', (req, res) => {
  // Express handles the basic headers for us {status code, mime type}
  res.sendFile(path.join(__dirname, '/node.html'));
  // console.log(path.join(__dirname, '/node.html'));
  // Express handles the end method for us
});

app.all('*', (req, res) => {  // This is a catch all for any other routes that are not defined earlier. So the path above "/" is be preferred over the path declared later
  res.send("<h1>Sorry, that is not the page you are looking for</h1>")
});

app.listen(5002, () => {
  console.log(__dirname);
  console.log('Server is running on http://localhost:5002');
});
