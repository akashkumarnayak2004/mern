

export const adminMiddleware = async(req,res,next)=>{
try {
     
    if(!req.user || !req.user.isAdmin){
        return res.status(403).json({message: "Access denied, admin only"});
    }
    // If the user is an admin, proceed to the next middleware or route handler
    next();
    
} catch (error) {
    console.log(error);
    next(error);
}
}