const dotenv = require('dotenv');
const express = require('express');
const userRouter = require('./routes/user.routes');
const indexRouter = require('./routes/index.routes');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
connectDB();

require('dotenv').config();
const app = express();

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});