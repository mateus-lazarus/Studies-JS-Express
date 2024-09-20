// http is native to node.js. We just have to ask for it.
const http = require('http');

// the http module has a create server method
// takes 1 arg:
// 1. callback, callback has 2 args: req, res
const server = http.createServer((req, res) => {    // Only listen for http traffic
    console.log(req);   // if not make a response, the browser will keep loading indefinitely

    // http message is made of:
    // 1. start-line -- is already done by the createServer method
    // 2. headers
    // 3. body 

    // write head takes 2 args:
    // 1. status code
    // 2. object for the mime-type
    res.writeHead(200, {'content-type': 'text/html'});  // browsers will wait for the content type to know how to render it
    res.write('<h1>welcome to our home page</h1>'); // write the body of the response to the client

    res.end(); // end the response and send it back to the client
});

// createServer returns an object with a listen method
// listen takes 1 arg:
// 1. port to listen for http traffic on
server.listen(5000); // only will have permissions to >1000 (root uses all below 1000)
