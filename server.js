const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;
//Call express which will return express server application
const app = express();
//Configure morgan using development version
app.use(morgan('dev'));
//express middleware function express.json
app.use(express.json());

app.all('/campsites', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //Pass control to next relevant routing method  
    next();
});

app.get('/campsites', (req, res) => {
    res.end('Will send all the campsites to you');
});

app.post('/campsites', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
});
//Returns not suppoerted
app.put('/campsites', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
});
//Just return a response
app.delete('/campsites', (req, res) => {
    res.end('Deleting all campsites');
});

app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

app.post('/campsites/:campsiteId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});
//Echo back jsom formatted
app.put('/campsites/:campsiteId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

//__direname - absolute path current directorhy
//Set express to serve statis files
app.use(express.static(__dirname + '/public'));

//Takes callback function middleware
//has access to req, res, next(don't need it now)
app.use((req, res) => {
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