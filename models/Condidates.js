const mongoose = require('mongoose');

const condidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
   
    status: {
        type: String,
        enum: ['en attente', 'accepté', 'rejeté'],

    },
    
}, {
    timestamps: true,
});

const Condidate = mongoose.model('Condidate', condidateSchema);

module.exports = Condidate;
