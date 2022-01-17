import {fetchUsers} from '../../services/users.js'

const getUsersPage = ( req, res, next ) => {
    fetchUsers()
    .then(users => {
        res.render('users',{
            users:users
        })
    })
};

export {
    getUsersPage
};