/**
 * Service talks to the database (data layer)
 */
import mongoose from 'mongoose';

 const Product = mongoose.model( 'Product' );
 
 const fetchProducts = (sort,order, minPrice,minRating) => {
     const filterClause = {
        price:{
            $gte:minPrice
        },
        rating:{
            $gte:minRating
        }

    };

    const sortClause = {
        [sort]:order === 'desc'? -1:1
    }
     return Product.find(filterClause).sort(sortClause);
 };
export{
    fetchProducts
}