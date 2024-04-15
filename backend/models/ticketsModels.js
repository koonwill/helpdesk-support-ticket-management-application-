const mongoose = require('mongoose');


const ticketsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        contact: {
            type: String,
            required: true
        },
        information: {
            type: String,
            required: true
        },
        created_date: {
            type: Date,
            default: Date.now
        },
        updated_date: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            default: 'pending'
        },
    },
    { collection: 'Tickets', versionKey: false }
);

const Tickets = mongoose.model('Tickets', ticketsSchema);
module.exports = Tickets;