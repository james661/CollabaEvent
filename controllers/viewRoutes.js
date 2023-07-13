const router = require('express').Router()
const { Attendee, Budget, Event, User } = require('../models');


router.get('/', async (req, res) => {
  res.render('home');
})

// router.post("/login", async (req, res) => {
//   console.log("what");
//   try {
//     const user = await User.findOne({
//       where: {
//         email: req.body.email,
//       },
//     });

//     if (req.session.loggedIn) {
//       res.redirect("/");
//       return;
//     }

//     res.render("login");
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.post("/signup", async (req, res) => {
//   console.log("what");
//   try {
//     // const user = await User.findOne({
//     //   where: {
//     //     userName: req.body.username
//     //   }
//     // })

//     if (req.session.loggedIn) {
//       res.redirect("/");
//       return;
//     }

//     res.render("signup");
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get("/calendar", (req, res) => {
  res.render("calendar");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router