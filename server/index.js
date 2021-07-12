const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// @@ CORS SETUP
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Authorization");
  next();
});

// @@ ROUTER ROUTE NAMES
app.use('/api/athletes', require('./routes/athlete'));

// @@ Connect to MONGO database, start express application on successful connection
async function start(){
  try {
    await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Connected to mongodb @ ${process.env.DB_URL}`)

    app.listen(port, () => {
      console.log(`Application started on port:${port}`)
    })

  }catch(err){
    console.log(err);
  }
}

start();