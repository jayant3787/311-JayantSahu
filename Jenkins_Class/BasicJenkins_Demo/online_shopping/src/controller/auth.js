import {getUserByCredentials} from '../services/auth.js';
import HttpError from '../utils/HttpError.js';
import jwt from 'jsonwebtoken';
const login = (req,res) => {
    const {body} = req;
    getUserByCredentials (body)
    .then(user =>{
        if(!user){
            const httpError = new HttpError('go away u cheat', 401);
            next(httpError);
            return;
        }
        //generate & send token

        const claims = {
            email: user.email,
            name: user.name,
            role: user.role
        };

        jwt.sign(claims, process.env.JWT_SECRET, (err, token) => {
            if(err){
                const httpError = new HttpError('unable to generate token right now, please try again later.', 500);
                next(httpError);
                return;
            }
            res.json({
            email: user.email,
            name: user.name,
            token:token

            })


        });
        // res.json("wait!!!! we will generate the token.....");
    });

};

export{
    login
};