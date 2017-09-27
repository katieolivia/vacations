var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var dotenv = require('dotenv');
dotenv.config();

var VacationsController = require('./controllers/VacationPackagesController');

var app = express();
app.use(cors());
app.use(bodyParser.json());
var port = 3005;

massive(process.env.DB_CONNECTION_STRING).then(db => {
    console.log('db is connected');
    app.set('db', db);
})

app.get('/packages', VacationsController.read);
app.post('/packages', VacationsController.create);
app.delete('/packages/:id', VacationsController.delete);




app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


