
import { fetchUsers } from "../services/users.cjs";
const getUsers = ( req, res ) => {
    res.json(fetchUsers());
};
export {
    getUsers
}