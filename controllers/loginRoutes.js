const router = require("express").Router();

router.post('/login', (req, res) => {
  // saving the user's username/password as a const
  // by using parameters of req
  const { username, password } = req.body;
  
  
  // send succesful login response back to client
  res.status(200).json({ message: "Login successful" });
});

module.exports = router;