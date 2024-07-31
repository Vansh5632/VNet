const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({msg:'No token'});
    }
    try{
        const decoded = jwt.verify(token,'secret');
        req.user = decoded.user;
        next();
    }catch(error){
        res.status(401).json({msg:'Token is not valid'});
    }
}