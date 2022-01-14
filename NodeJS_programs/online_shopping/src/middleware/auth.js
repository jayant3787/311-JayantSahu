import  jwt  from 'jsonwebtoken';
import HttpError from '../utils/HttpError.js';
const authenticate = (req,res,next) => {
    const Authorization = req.header('Authorization');
    // console.log(Authorization);

    const token = Authorization.split(' ')[1];

    jwt.verify(token,'shh...',(err,claims) =>{
        if(err){
            const httpError = new HttpError('Your token seems to invalid', 401);
            next(httpError);
            return;
        }
        next();
    })
    
};

export{
    authenticate
}