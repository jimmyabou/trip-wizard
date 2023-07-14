const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const createUserRouter = require('./routes/createUser');
const loginUser = require('./routes/loginUser');
const attractionsRouter = require('./routes/attractions');
const favoritesRouter = require('./routes/userFavourites');
const createPackageRouter = require('./routes/createPackage');
const getPackagesRouter = require('./routes/getPackages');
const deletePackageRouter = require('./routes/deletePackage');
const addDayRouter = require('./routes/addDay');
const getDaysRouter = require('./routes/getDays');
const deleteDayRouter = require('./routes/deleteDay');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/createUser', createUserRouter);
app.use('/login', loginUser);
app.use('/attractions', attractionsRouter);
app.use('/attractions/featured', attractionsRouter);
app.use('/attractions/filtered', attractionsRouter);
app.use('/favorites', favoritesRouter);
app.use('/createPackage', createPackageRouter);
app.use('/getPackages', getPackagesRouter);
app.use('/deletePackage', deletePackageRouter);
app.use('/addDay', addDayRouter);
app.use('/getDays', getDaysRouter);
app.use('/deleteDay', deleteDayRouter);



























module.exports = app;
