import mongoose from 'mongoose';
import commentSchema from './Comment.js';

const articleSchema = new mongoose.Schema({

    comments:{
        type: [ commentSchema ],
    },

    author:{
        type: String,
        required:true
    },

    title:{
        type: String,
        required:true
    },

    abstract:{
        type: String,
        required:true
    },

    body:{
        type: String,
        required:true
    },

    imageUrl:{
        type: String,
        required:false
    },

    createdAt:{
        type: Date,
        required:true,
        default: Date.now
    }
});

mongoose.model('Article', articleSchema );