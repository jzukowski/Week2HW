var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello World"
   response.end('Hi there! This instance was built by Jan for SWDV 660.\nIf you see this then the web server is running!\nUpdate made for week 3\n')
}).listen(3333)

// Console will print the message
console.log('Server running')