const router = require('express').Router()

const apiRoutes = require('./api');
const loginRoutes = require("./loginRoutes");
const user = require("./user");
const auth = require("./auth");
const viewRoutes = require("./viewRoutes");
router.use('/', viewRoutes)
router.use('/api', apiRoutes)

module.exports = router
