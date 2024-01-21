// const express = require('express');
// const talentRoutes = require('./src/talent/routes');
// const app = express();
// const port = 3000;
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.use('/api/talents', talentRoutes);

// app.listen(port, () => console.log(`App listening on port ${port}!`));

'use strict'

require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const PORT = 3000;
var talentRouter = require('./routes/talentRouter')
var messageRouter = require('./routes/messageRouter')
const message = require('./database/models/message')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/', talentRouter)
app.use('/api/', messageRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // 404 Not Found.
    if (err.status === 404) {
      return res
        .status(404)
    }

    // 500 Internal Server Error (in production, all other errors send this response).
    if (req.app.get('env') !== 'development') {
      return res
        .status(500)
    }

    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
})

// Start listening.
app.listen(PORT, async () => {
    console.log(`Server started on http://localhost:${PORT}`)
    console.log('Press Ctrl-C to terminate...')
})

module.exports = app
