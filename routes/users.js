var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "users" });
});

router.post("/signup", (req, res, next) => {
  if (!req.body.user || !req.body.password) {
    res.json({ message: "Please enter username and password" });
  } else {
    res.json({ user: req.body.user });
  }
});

router.get("/:name", (req, res, next) => {
  res.json({ test: req.params.name });
});

module.exports = router;
