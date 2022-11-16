const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const router = require('./routes/routes')
const db = require('./database/db')
require('dotenv').config();
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());
app.use(bodyParser.json())
app.use(router);

db()

const port = 8000 || process.env.PORT;

app.listen(port, () => {  
    console.log('We are live on ' + port);
});