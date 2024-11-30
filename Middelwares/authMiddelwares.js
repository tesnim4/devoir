const jwt=require('jsonwebtoken');
const authMiddleware=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    try{
    const decodedToken=jwt.verify(token,'votre_secret');
    req.cust=decodedToken;
    next();
}catch(error){
    res.json(error.message);
}
}
module.exports=authMiddleware;