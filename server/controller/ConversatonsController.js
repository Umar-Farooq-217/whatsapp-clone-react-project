import Conversation from "../model/Conversation.js";


export const newConversation = async(req , res)=>{
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId
        const exist = await Conversation.findOne({ members: { $all: [senderId, receiverId] } });

        if(exist){
            return res.status(200).json('Conversation Already exist')
        }
        const startConversation = new Conversation({
            members:[senderId,receiverId]
        })
        await startConversation.save()
        return res.status(200).json('Conversation has start ')
    } catch (error) {
        return res.status(500).json('error during conversation api ' , { message: error.message })

    }
}