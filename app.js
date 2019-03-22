const express        = require('express'),
      app            = express(),
      mongoose       = require('mongoose'),
      methodOverride = require('method-override'),
      bodyParser     = require('body-parser'),
      indexRoutes    = require('./routes/index.js'),
      travelRoutes   = require('./routes/travels.js');


mongoose.connect('mongodb+srv://traveler:traveler@cluster0-52rrg.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(indexRoutes);
app.use(travelRoutes);
app.set("view engine", "ejs");
app.use(methodOverride('_method'));


app.listen(3001, function(){
    console.log("Traveler is running on port 3001");
});