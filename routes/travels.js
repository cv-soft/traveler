const express = require('express'),
      Travels = require('../models/travels');
      router  = express.Router();



router.get("/travels", (req, res) => {
    res.send("hello from travels")
});

router.post("/travels",  (req, res) => {
    const name = req.body.name;
    const imageUrl = req.body.image;
    const desc = req.body.description;

    const newTravel = {name: name, imageUrl: imageUrl, description: desc};
    Travels.create(newTravel, function(err, travel){
        if(err){
            console.log(err);
        }else {

            res.redirect("/travels");
        }
    })
});

router.get("/travels/new", (req, res) => {
    res.render("travels/new")
});

module.exports = router;