const express = require('express');
const app = express();

// Express is 2 things:
// 1. Router
// 2. Middleware that comprises a web framework

// Middleware: functions that execute during the lifecycle of a request to the express server.

// Middleware function: takes 3 arguments: request, response, next
// next: callback that signals the end of the middleware function

// Middleware function can end the request-response cycle
// Middleware function can call the next middleware function in the stack

// Middleware function can do the following:
// Execute any code
// Make changes to the request and the response objects
// End the request-response cycle
// Call the next middleware function in the stack



// Req ---> Middleware ---> Res
// 1. Request comes in
// 2. We need to validate the user, sometimes
// 3. We need to store some things in the database
// 4. If there are data from the user, we need to parse it and store it
// 5. Response


function validateUser(req, res, next) {
  // get info out of the request object
  // do some stuff with the database
  res.locals.validated = true;  // res.locals is an object that exists for the lifetime of the request
  console.log('validated ran', res.locals.validated);
  next();
}

// The first middleware set is always the first to run and so on
// app.use(validateUser);  // To run the middleware function for all routes
app.use('/admin', validateUser);  // To run the middleware function for the /admin route


// And the 'app.use' is the same as the 'app.get' because both are middleware functions

app.get('/', (req, res, next) => {
  res.send('<h1>Home hello</h1>')
});


app.get('/admin', (req, res, next) => {
  res.send('<h1>Admin hello</h1>')
});


app.listen(5000);

