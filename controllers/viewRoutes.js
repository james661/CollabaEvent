const router = require('express').Router()
const { Attendee, Budget, Event, User } = require('../models');


router.get('/', async (req, res) => {
  res.render('home');
})

router.get("/login", async (req, res) => {
  console.log('what');
 try { 
  // const user = await User.findOne({
  //   where: {
  //     userName: req.body.username
  //   }
  // })

  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render('login');
}
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }});

router.get("/signup", async (req, res) => {
  console.log("what");
  try {
    // const user = await User.findOne({
    //   where: {
    //     userName: req.body.username
    //   }
    // })

    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }

    res.render("signup");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/calendar", (req, res) => {
  res.render("calendar");
});


module.exports = router