const router = require("express").Router();


router.get("/calendar", (req, res) => {
  res.render(calendar)
})

module.exports = router;

// const post = {
//   id: 1,
//   title: 'Sample Post',
//   content: 'This is a sample post',
//   sharedWith: [1, 3] // IDs of users with whom the post is shared}