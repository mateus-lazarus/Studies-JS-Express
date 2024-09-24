const path = require('path');
const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // We could also pass an array of paths

// Ejs tags are these:
// 1. <% %> for control-flow, no output
// 2. <%= %> for outputting the value into the template
// 3. <%- %> for unescaped output into the template
// 4. <%# %> for comments, no output
// 5. <%% %> for literal '<%'
// 6. %%> for literal '%>'
// 7. -%> trim-mode ('newline slurping') tag, trims following newline
// 8. <%_ _%> whitespace slurping tag, strips all whitespace before it
// 9. %> plain ending tag


function validateUser(req, res, next) {
  res.locals.validated = true;
  console.log("Validated Ran!");
  res.locals.userName = "Mateus-Lazarus-Dev"
  next();
}

app.use(validateUser);


app.get('/', (req, res) => {
  // The data in the 2nd arg, is going to be appended to the res.locals object
  // Making available to the template
  res.render('index', {
    msg: "Success!",
    msg2: "Success again!",
    imageHtml: "<img src='./public/images/node-created-path.png' />",
  });
}, {});


app.listen(5000);

