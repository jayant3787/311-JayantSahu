// import { fetchProducts } from "../services/products.cjs";
import { fetchProducts } from "../services/products.js";
const getProducts = ( req, res ) => {
    const {sort, minPrice,minRating} = req.query;
    console.log(sort, minPrice,minRating);
    fetchProducts(sort,minPrice,minRating)
       .then(products => {
           res.json(products);

       })
       .catch(err =>{
           res.json(err.message);
       });
    
};
export {
    getProducts
}