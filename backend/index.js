const express = require('express'); //import express
const mongoose = require('mongoose'); //import mongoose

const postRoute = require('./routes/post.routes');

const app = express(); //initialising express

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/post', postRoute);

// mongoose.connect('mongodb://localhost:27017/React', (err) => {
//   if (err) throw error;
//   console.log('database connected..');
// });

mongoose
  .connect('mongodb://127.0.0.1:27017/React', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('database is connected'));

app.listen(3000, () => console.log('server is running on port 3000'));
