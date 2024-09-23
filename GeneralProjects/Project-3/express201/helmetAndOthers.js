const express = require('express');
const app = express();
const helmet = require('helmet');

// Helmet helps you secure your Express apps by setting various HTTP headers.
// npm install helmet
app.use(helmet());  // It is possible to configure, see the documentation: https://helmetjs.github.io/docs/


app.use(express.static('public'));
app.use(express.json());  // For parsing application/json. More documentation: https://expressjs.com/en/api.html#express.json
app.use(express.urlencoded({ extended: false }));  // For parsing application/x-www-form-urlencoded. More documentation: https://expressjs.com/en/api.html#express.urlencoded

// 1. Static
// 2. JSON
// 3. URL-encoded


app.post('/ajax', (req, res) => {
  // console.log(req);
  // console.log(req.headers);
  console.log(req.body);
  // res.send('ajax request sent');  // res.send() use content-type: text/html
  res.json({ success: true });  // res.json() use content-type: application/json and jsonstringify() the object
});

app.listen(5000);

