const router = require('express').Router()

const apiRoutes = require('./api');
const loginRoutes = require("./loginRoutes");
const user = require("./user");
const auth = require("./auth");
const viewRoutes = require("./viewRoutes");
router.use('/', viewRoutes)
router.use('/api', apiRoutes)
// const apiRoutes = require('./api')
// const viewRoutes = require('./viewRoutes')

// router.use('/', viewRoutes)
// router.use('/api', apiRoutes)

// module.exports = router


// const express = require("express");
// const { User, Event, Attendee, Budget } = require("../models"); // Import all the models
// const eventRoute = require("./api/eventRoutes"); // Import the event route

// const app = express();

// // Add middleware and configuration as needed

// // Mount the event route
// app.use("/api", apiRoutes);

// // Start the server
// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });


module.exports = router;