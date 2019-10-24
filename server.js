require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
// const router = require('./routes/index');

const app = express();
app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', router);

// error handler goes here

app.listen(5000, () => {
  console.log(`Server listening on PORT 5000`);
});
