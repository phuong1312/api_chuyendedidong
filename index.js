const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config({ path: __dirname + '/.env' });

const port = process.env.PORT
const app = express();

app.use(bodyParser.json());
app.use(express.json());
var dbConn = require('./src/config/config');
const userRoute = require('./src/routes/UserRoute');


mongoose.connection.once('open', () => {
    console.log('Connect mongodb');
    app.listen(port, () => {
        console.log('server api port ' + port);
        setInterval(function () {
            console.log('server api port ' + port);
        }, 300000);
    });
});

app.use('/api/add_user', userRoute);

app.use(bodyParser.json({limit: "50mb"}));
app.use(morgan('common'));
app.get('/api', (req, res) => {
    res.status(200).json("ok");
});
