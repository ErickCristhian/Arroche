const mongoose = require('mongoose');
require('dotenv').config({path:'.env'});
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
    console.error(error.message);
});
require('./models/Url');

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


app.listen(process.env.PORT);

