// http is native to node.js. We just have to ask for it.
const http = require('http');

// it is secure because only the server can access the file system
const fs = require('fs');   // file system module. We need this to read the html file. Built-in module


// the http module has a create server method
// takes 1 arg:
// 1. callback, callback has 2 args: req, res
const server = http.createServer((req, res) => {    // Only listen for http traffic
    console.log(req);   // if not make a response, the browser will keep loading indefinitely
    console.log(req.url);   // the path of the request "http://localhost:5000/home" -> "/home"

    if (req.url === '/') {  // The user wants the home page
        // http message is made of:
        // 1. start-line -- is already done by the createServer method
        // 2. headers
        // 3. body 

        // write head takes 2 args:
        // 1. status code
        // 2. object for the mime-type
        res.writeHead(200, {'content-type': 'text/html'});  // browsers will wait for the content type to know how to render it
        // Not will be used anymore: res.write('<h1>Welcome to our home page</h1>'); // write the body of the response to the client
        
        const homePageHTML = fs.readFileSync('node.html');   // read the file synchronously
        res.write(homePageHTML);    // write the body of the response to the client

        res.end(); // end the response and send it back to the client
    } else if (req.url === '/node-created-path.png') {
        res.writeHead(200, {'content-type': 'image/png'});  // set the correct content type for images
        const image = fs.readFileSync('node-created-path.png');  // read the image file synchronously
        res.write(image);  // write the image to the response
        res.end(); // end the response and send it back to the client
    }
     else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>Sorry, this isn\'t the page you are looking for</h1>');
        res.end();
    }

    

});

// createServer returns an object with a listen method
// listen takes 1 arg:
// 1. port to listen for http traffic on
server.listen(5000); // only will have permissions to >1000 (root uses all below 1000)
