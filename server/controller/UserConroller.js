import User from "../model/User.js"

export const addUser = async(res,req)=>{
    console.log("Received Data:", req.body);

    try {
        let exist = await User.findOne({
            sub:req.body.sub
        })
        if(exist){
            res.status(200).json({msg:'use exis'})
            return
        }
        const newUser = new User(req.body)
        await newUser.save()
        return res.status(200).json('User has add')
    } catch (error) {
     return res.status(500).json({msg:'error during add user'})
    }
    
}