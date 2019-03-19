const express = require('express'),
    app = express();
const indexRoutes = require('./routes/index.js');

app.use(indexRoutes);
app.listen(3001, function(){
    console.log("Traveler is running on port 3001");
});