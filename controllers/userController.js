const User = require('../models/userModel')



const signup = async(req, res)=>{
    try {
        const {username, email, password, DOB} = req.body;
        if(([username, email, password, DOB].some((el)=> el.trime()= ""))){
            return res.status(401).json({err: "All fields are required"})
        } 

        const user = new User({username, email, password, DOB})
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        console.log(user)
    }
}

module.exports = {signup}