import express from "express";
import path from "path";
import {productRouter} from './backend/routes/router-products.js';

const app = express();
const __dirname = path.resolve();

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'build')));
app.use('/api', productRouter);
app.listen(port, () => {
    console.log(`Сервер запущен localhost:${port}!`)
});


/*
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors())
app.use(helmet())
app.listen(process.env.PORT, () => {
  console.log(`Port ${process.env.port}`);
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
*/
