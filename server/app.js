const express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    mongoose = require('mongoose')
    router = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware & Bodyparsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(express.static(path.join(__dirname, '../client/build')));
//Use morgan to check routes
app.use(morgan('dev'));

//MongoDB connection
const connection = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/url', { useNewUrlParser: true, useUnifiedTopology: true });

connection.once('open', function () {
    console.log(
        "MongoDB database connection established successfully."
    );
})

// Import the routing setup from our Router 
app.use('/', router);

//Serving react on routes unused by previous routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});



//Startup
app.listen(PORT, () => {
    console.log(`The API Server is listening on port: ${PORT}`)
})