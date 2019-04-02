const express = require('express'),
      router  = express.Router();

router.get("/", (req, res) => {
    res.render("landing")
});
router.get("/about", (req, res) =>{
    res.render("about");
});
router.get("/contacts", (req, res) =>{
    res.render("contact")
});

module.exports = router;