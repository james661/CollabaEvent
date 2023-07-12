const router = require("express").Router();

router.get("/calendar", (req, res) => {
  res.render(calendar);
});

module.exports = router;
