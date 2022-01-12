/**
 * Service talks to the database (data layer)
 */
import mongoose from 'mongoose';

 const Product = mongoose.model( 'Product' );
 
 const fetchProducts = (sort, minPrice,minRating) => {
     return Product.find({
         price:{
             $gte:minPrice
         },
         rating:{
             $gte:minRating
         }

     });
 };
export{
    fetchProducts
}