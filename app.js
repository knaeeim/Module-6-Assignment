const express = require('express');
const app = express();


const apiRoutes = require('./src/Routes/api');

// Use API routes
app.use('/api', apiRoutes);


app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 

module.exports = app;
