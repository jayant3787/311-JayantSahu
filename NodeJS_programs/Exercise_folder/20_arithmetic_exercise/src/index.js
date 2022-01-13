import express from 'express';
import myAdd from './routes/add.js';
import mySubtract from './routes/subtract.js';
import myMultiply from './routes/multiply.js';
import myDivide from './routes/divide.js';


const app = express();

app.use( myAdd );
app.use(mySubtract);
app.use(myMultiply);
app.use(myDivide);

const PORT = process.env.PORT || 3000;

app.listen( PORT, err => {
    if( err ) {
        console.log( error.message );
        return;
    }

    console.log( `Started http://localhost:${PORT}` );
});