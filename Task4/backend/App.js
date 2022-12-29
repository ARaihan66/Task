const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require('./Routers/UserRouter');

app.use('/api', userRouter)


module.exports = app;