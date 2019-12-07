var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoose = require('mongoose');


var app = express();

//mongoose.connect('mongodb+srv://andy_sa_account:5Y3FADcat5AqyvOM@cluster0-kdf9e.azure.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://vinc:RorxCC2neSSiz8Gc@cluster0-kdf9e.azure.mongodb.net/test?retryWrites=true&w=majority')
//mongoose.connect('mongodb://localhost:27017/lol')
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.log('Error connecting to database');
        console.log(error);
    });
// view engine setup
app.set('trust proxy', 1);
app.use(require('express-session')({
    secret: 'lol',
    resave: true,
    saveUninitialized: true,
}));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.create({
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
}).engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var carRoute = require('./routes/carApi');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/cars', carRoute);
app.use('/cars', require('./routes/cars'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.listen(5005, () => {
    console.log('server runnin');
});
module.exports = app;
