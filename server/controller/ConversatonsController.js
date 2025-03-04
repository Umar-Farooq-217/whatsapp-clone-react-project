import Conversation from "../model/Conversation.js";

export const newConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId
        const exist = await Conversation.findOne({ members: { $all: [senderId, receiverId] } });

        if (exist) {
            return res.status(200).json({ message: 'Conversation already exists' });
        }

        const startConversation = new Conversation({
            members: [senderId, receiverId]
        });

        await startConversation.save();
        return res.status(200).json({ message: 'Conversation has started' });

    } catch (error) {
        return res.status(500).json({ error: 'Error during conversation API', message: error.message });
    }
};


export const getConversation = async(req , res)=>{
    try {
        let senderId = req.body.senderId;
        let receiverId = req.body.receiverId

        let conversation = await findOne({ members : { $all : [senderId,receiverId]}})
        return res.status(200).json(conversation)
    } catch (error) {
        return res.status(500).json(error)
    }
}
