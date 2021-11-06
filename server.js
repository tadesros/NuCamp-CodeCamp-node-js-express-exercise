const express = require('express');

const hostname = 'localhost';
const port = 3000;
//Call express which will return express server application
const app = express();
//Takes callback function middleware
//has access to req, res, next(don't need it now)

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    //Content type text/html
    res.setHeader('Content-Type', 'text/html');
    //Res end 
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

//App.listen-> creates instance and starts listening
//give port, hostname and callback
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});