const User = require('../models/user.model')

// CREATE USER
exports.createUser = async (req,res,next)=>{
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            success: true,
            data:user
        })

        
    } catch (error) {
        next(error)
        
    }
}

//GET ALL USERS
exports.getAllUsers = async (re,res,next)=>{
    try {
        const user = await User.find()
        res.status(200).json({
            success:true,
            data: user
        })
    } catch (error) {
        next(error)
        
    }
}
//GET SINGLE USER
exports.getUser = async (req,res,next)=>{
    try {
        const user  = await User.findById(re.params.id)
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        res.status(200).json({
            success:true,
            data:user
        })
        
    } catch (error) {
        next(error)
        
    }

}

//UPDATE USER
exports.updateUser = async (req,res,next)=>{
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        res.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        next(error)
    }
}

// DELETE USER  

exports.deleteUser = async (req,res,next)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }

        res.status(200).json({
            success:true,
            message:"User deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}