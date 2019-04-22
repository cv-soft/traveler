const express = require('express'),
      Travels = require('../models/travels');
      router  = express.Router();



router.get("/travels", (req, res) => {
   Travels.find({}, (err, allPosts) => {
       if(err){
           console.log(err)
       } else {
           console.log(allPosts)
           res.render("travels/travels", {allPosts})
       }
   })
});

router.post("/travels",  (req, res) => {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
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
router.put("/travels/:id/edit", (req,res) => {

});
router.get("/travels/:id", (req, res) => {
    Travels.findById(req.params.id, (err, post) =>{
        if(err){
            res.redirect("/travels");
        } else {
            res.render("travels/article", {post});
        }
    })

});

router.get("/travels/new", (req, res) => {
    res.render("travels/new")
});

module.exports = router;