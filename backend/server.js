const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const { response } = require('express');

//db Service Connection File
const dbService = require('./db_Service.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors());


//create

app.post('/insert', (req, res) => {

})

//read

app.get('/getAll', (req, res) => {
    const db = dbService.getDbServiceInstance()
    
    const result = db.getAllData();

    result
    .then(data => res.json({data : data}))
    .then(err => console.log(err))
    console.log(res)
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});


