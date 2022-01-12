// import { fetchProducts } from "../services/products.cjs";
import { fetchProducts } from "../services/products.js";
const getProducts = ( req, res ) => {
    fetchProducts()
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