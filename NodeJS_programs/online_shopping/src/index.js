// import express from 'express';
// const app = express();
// app.get('/users', (req,res) =>{
//     res.send("we will send the list of the users:  jayant,meghal,rakesh,shashank")

// })
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, err =>{
//     if(err){
//         console.log(error.message);
//         return;
//     }
//     console.log(`started ${PORT}`);
// });

import './data/index.js';
import express from 'express';
import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js'
const app = express();

// extract json data from request body

app.use(express.json());
app.use(express.urlencoded());


app.use( usersRouter );
app.use(productsRouter);

const PORT = process.env.PORT || 4000;

app.listen( PORT, err => {
    if( err ) {
        console.log( error.message );
        return;
    }

    console.log( `Started http://localhost:${PORT}` );
});