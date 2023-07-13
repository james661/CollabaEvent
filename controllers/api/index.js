const router = require('express').Router();

const userRoutes = require('./userRoutes');
// const eventRoutes = require('./eventRoutes');
// const budgetRoutes = require('./budgetRoutes');
// const attendeeRoutes = require('./attendeeRoutes');

router.use('/user', userRoutes)
// router.use('/events', eventRoutes);
// router.use('/budgets', budgetRoutes);
// router.use('/attendees', attendeeRoutes);

module.exports = router;
