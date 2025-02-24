import mongoose from "mongoose";


const conversationSchema = new mongoose.Schema({

    members: {
        type: Array,
         required: true
    },
    message: {
        type: String
    }
},
    {
        timestamp: true
    })
const Conversation = mongoose.model('Conversation',conversationSchema)
export default Conversation;
