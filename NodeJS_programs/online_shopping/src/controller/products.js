// import { fetchProducts } from "../services/products.cjs";
import { fetchProducts } from "../services/products.js";
const getProducts = ( req, res ) => {
    const {sort,order, minPrice,minRating} = req.query;
    console.log(sort,order, minPrice,minRating);
    fetchProducts(sort,order,minPrice,minRating)
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