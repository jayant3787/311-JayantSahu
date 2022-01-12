// const mongoose = require( 'mongoose' );
import mongoose from 'mongoose';

const User = mongoose.model( 'User' );
const fetchUsers = () => {
    return User.find();
};

export{
    fetchUsers
}

