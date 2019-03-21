const express = require('express'),
      router  = express.Router();

router.get("/travels", (req, res) => {
    res.send("hello from travels")
});

module.exports = router;