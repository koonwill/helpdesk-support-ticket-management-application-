const express = require('express');
const router = express.Router();

router.use('/tickets', require('./ticketsRoutes'));

module.exports = router;