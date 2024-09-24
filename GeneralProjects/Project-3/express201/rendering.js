const path = require('path');
const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

// serve up static files
app.use(express.static('public'));
// parse json and urencoded data into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.set() takes 2 args:
// 1. The name of the setting
// 2. The value of the setting
// - The name of the setting is the view engine
// For more documentation on view engines, visit https://expressjs.com/en/guide/using-template-engines.html
// And we going to have to call the view engine we want to use in the app.set() method

app.set('view engine', 'ejs');
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug');

// The views directory is the default directory that express looks for views
// The view directory by default has the path './views' of the root directory

app.set('views', path.join(__dirname, 'views'));  // We could also pass an array of paths


// 1. We need to define a view engine to res.render() to work
// 2. There are these view engines:
// - **ejs**. Means Embedded JavaScript and we need to install it in order to use it
// - **jade/pug**. Means Jade and we need to install it in order to use it
// - **handlebars**. It's an compiler engine. A little time without updates, maybe not so common... Prefix 'hbs' is used for handlebars engine view
// - **mustache**. It's an compiler engine. We need to install it in order to use it
// 3. Inside one of our rotes we have a res.render('view-name')
// 4. We pass that res.render 2 things:
// - The name of the view file to render
// - The data to pass into the view file
// 5. Expres uses the node module for our specified view engine and parses the file
// - That means it takes the HTML/JS/CSS and combines it with the whatever "node" there is in the file
// 6. The final result of this process is a compiled product of the things the browser can understand
// - HTML/JS/CSS


app.get('/', (req, res) => {
  res.render('index');
});


app.listen(5000);

