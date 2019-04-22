const express = require('express');
const cors = require('cors');
const errorHandler = require('./handlers/errorHandler');
const app = express();
const PORT = 8082;

app.use(cors);
app.use(function(req, res, next){
    let err = new Error("Not found");
    err.status = 404;
    next(err);
});
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
});
