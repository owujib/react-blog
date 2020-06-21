const express = require('express'); //import express
const mongoose = require('mongoose'); //import mongoose
const cors = require('cors');
require('dotenv').config();

const postRoute = require('./routes/post.routes');
const userRoute = require('./routes/user.routes');

const app = express(); //initialising express

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/post', postRoute);
app.use('/api/user', userRoute);

// mongoose.connect('mongodb://localhost:27017/React', (err) => {
//   if (err) throw error;
//   console.log('database connected..');
// });

mongoose
  .connect(process.env.DB_LOCAL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('remote database is connected......'))
  .catch(err => console.log(err));

app.listen(3000, () => console.log('server is running on port 3000'));
