import { fetchUsers } from "../services/users.js";
const getUsers = ( req, res ) => {
    fetchUsers()
       .then(users => {
           res.json(users);

       })
       .catch(err =>{
           res.json(err.message);
       });
    
};
export {
    getUsers
}