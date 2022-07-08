const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat"
    },
    message: {
        type: String,
    }
}, { timestamps: true })


const Message = mongoose.model('Message', messageSchema)

module.exports = Message