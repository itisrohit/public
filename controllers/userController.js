const User = require('../models/userModel')



const signup = async(req, res)=>{
    try {
        const {username, email, password, DOB} = req.body;
        if(!username) return res.status(401).json({err:"Username cannot be empty"})
        if(!email) return res.status(401).json({err:"Email cannot be empty"})
        if(!password) return res.status(401).json({err:"Password cannot be empty"})
        if(password.length<8 || password.length> 16){
            return res.status(401).json({err: "Password cannot be short than 8 character or longer than 16 characters"})
        }
        

        const user = new User({username, email, password, DOB})
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        console.log(user)
    }
}

module.exports = {signup}