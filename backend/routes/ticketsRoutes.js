const express = require('express');
const router = express.Router();
const { createTicket, getTickets, updateTicket, updateTicketStatus } = require('../controllers/ticketsController');

// GET all tickets
router.route('/all').get(getTickets);

// POST add ticket
router.route('/create').post(createTicket);

// PUT update ticket
router.route('/:id').put(updateTicket);

// PUT update ticket status
router.route('/:id/status').put(updateTicketStatus);

module.exports = router;