import { fetchUsers } from "../services/users.js";
const getUsers = ( req, res ) => {
    let {sort,order,filRole,page} = req.query;
    let pageInt = parseInt(page);

    if(isNaN(page)){
        pageInt = 1;
    }
    if(!sort){
        sort = "name";
    }
    if(!order){
        order = "asc";
    }
    fetchUsers(sort,order,filRole,page)
       .then((users) => {
           res.json(users);

       })
       .catch((err) =>{
           res.json(err.message);
       });
    
};
export {
    getUsers
}