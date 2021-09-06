const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const postsRoute = require('./routes/posts');
const userRoute = require('./routes/customer');
const imageRoute = require('./routes/images');

app.use(bodyParser.json());
   

app.use("/posts",postsRoute);
app.use("/images",imageRoute);
app.use("/customer", userRoute);

module.exports =app;

