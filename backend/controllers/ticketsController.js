const tickets = require('../models/ticketsModels');
const asyncHandler = require('express-async-handler');

const createTicket = asyncHandler(async (req, res) => {
    try {
        const utc = new Date()
        utc.setHours(utc.getHours() + 7)
        req.body.created_date = utc
        req.body.updated_date = utc
        const newTicket = await tickets.create(req.body);
        res.status(201).json(newTicket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

const getTickets = asyncHandler(async (req, res) => {
    try {
        const allTickets = await tickets.find({});
        res.status(200).json(allTickets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

const updateTicket = asyncHandler(async (req, res) => {
    try {
        const ticket = await tickets.findOne({ _id: req.params.id });
        if (!ticket) {
            return res.status(404).json({ message: "Ticket not found" });
        }
        const updatedTicket = await tickets.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTicket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

const updateTicketStatus = asyncHandler(async (req, res) => {
    try {
        const ticket = await tickets.findOne({ _id: req.params.id });
        if (!ticket) {
            return res.status(404).json({ message: "Ticket not found" });
        }
        const updatedTicket = await tickets.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        res.status(200).json(updatedTicket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = { createTicket, getTickets, updateTicket, updateTicketStatus }; 