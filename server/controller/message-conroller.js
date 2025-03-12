
import Message from "../model/All-messages.js"
import Conversation from "../model/Conversation.js";



export const newMessage = async(req , res)=>{
    try {
        const newMessage = await Message(req.body);
        await newMessage.save()

       await Conversation.findByIdAndUpdate(req.body.conversationId , {message : req.body.text})

        return res.status(200).json('message sent successfully')

    } catch (error) {
        return res.status(500).json(error.message)

    }
}


export const getMessage = async ( req , res ) =>{
    try {
        const messages = await Message.find({ conversationId : req.params.id })
        return res.status(200).json(messages)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}