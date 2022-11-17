const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const router = require('./routes/routes')
const db = require('./database/db')
require('dotenv').config();
const path = require('path');
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

const port =  process.env.PORT || 8000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend', 'build')));
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
    })
  }

app.listen(port, () => {  
    console.log('We are live on ' + port);
});