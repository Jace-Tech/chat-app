const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    isGroupChat: { type: Boolean, default: false },
    groupAdmin: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    groupName: { type: String },
    lastMessage: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Message"
    }
}, { timestamps: true })

const Chat = mongoose.model("Chat", chatSchema)

module.exports = Chat