const express      = require('express'),
      app          = express(),
      indexRoutes  = require('./routes/index.js')
      travelRoutes = require('./routes/travels/travels.js');


app.use(indexRoutes);
app.use(travelRoutes);
app.set("view engine", "ejs");

app.listen(3001, function(){
    console.log("Traveler is running on port 3001");
});