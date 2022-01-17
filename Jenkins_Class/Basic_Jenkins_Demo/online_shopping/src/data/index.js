import mongoose from 'mongoose';
// create the models
import '../models/Product.js';
import '../models/User.js';
const connectionStr = `mongodb://localhost:27017/online-shopping`;
mongoose
    .connect( connectionStr )
    .then(() => {
        console.log( `connected to the DB` );
    })
    .catch(err => {
        console.log( err.message );
    });