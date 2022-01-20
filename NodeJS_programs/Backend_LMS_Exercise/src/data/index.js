import mongoose from 'mongoose';
import '../models/Article.js';

const connectionStr = `mongodb://localhost:27017/blogs`;
mongoose.connect(connectionStr).then(() =>{
    console.log(`connected to the mongodb database`);
})
.catch(err => {
    console.log(err.message);
});

