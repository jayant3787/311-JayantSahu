/**
 * Service talks to the database (data layer)
 */
import mongoose from 'mongoose';

 const Product = mongoose.model( 'Product' );
 
 const fetchProducts = () => {
     return Product.find();
 };
export{
    fetchProducts
}