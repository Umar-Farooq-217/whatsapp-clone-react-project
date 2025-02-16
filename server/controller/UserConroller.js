import User from "../model/User.js"

export const addUser = async(req,res)=>{
    console.log("Received Data:", req.body);

    try {
        if (!req.body.name || !req.body.email || !req.body.picture) {
            return res.status(400).json({ error: "Missing required fields" });
          }
        let exist = await User.findOne({
            sub:req.body.sub
        })
        if(exist){
            res.status(200).json({msg:'user exist'})
            return
        }
        const newUser = new User(req.body)
        await newUser.save()
        return res.status(200).json('User has add')
    } catch (error) {
     return res.status(500).json({msg:'error during add user'})
    }
    
}


export const getUsers = async (req , res)=>{
try {
    let users = await User.find({})
    return res.status(200).json(users)
} catch (error) {
    return res.status(500).json(error.message)
}
}

