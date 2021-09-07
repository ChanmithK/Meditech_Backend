const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


const postsRoute = require('./routes/posts');
const userRoute = require('./routes/customer');
const imageRoute = require('./routes/images');
const orderRoute = require('./routes/order');

app.use(express.json());
app.use(cors());

   

app.use("/posts",postsRoute);
app.use("/images",imageRoute);
app.use("/customer", userRoute);
app.use("/order", orderRoute);

module.exports =app;

