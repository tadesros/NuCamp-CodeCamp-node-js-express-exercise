
//THIS IS USING EXPRESS

//Initialize require express
const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const partnerRouter = require('./routes/partnerRouter');


const promotionRouter = require('./routes/promotionRouter');


//Put hostname into a variable you can change on the fly
const hostname = 'localhost';
const port = 3000;
//Set from express
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/campsites', campsiteRouter);
app.use('/partners', partnerRouter);
app.use('/promotions', promotionRouter);

//Set path to look into public folder
//__dirname -> Aboslute URL to the current
app.use(express.static(__dirname + '/public'));
//Request and response 
app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});
//Listen on the port and the hostname 
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



