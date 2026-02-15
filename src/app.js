const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
app.use(express.json());
app.use(cookieParser());



/**
 * -Routes required
**/
const authRouter = require('./routes/auth.route.js');
const accountRouter = require('./routes/account.route.js');

/**
 * - Use Routes
**/
app.use('/api/auth',authRouter);
app.use('/api/accounts',accountRouter);




module.exports = app;