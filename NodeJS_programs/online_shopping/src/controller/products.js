// import { fetchProducts } from "../services/products.cjs";
import { fetchProducts } from "../services/products.js";
const getProducts = ( req, res ) => {
    let {sort,order, minPrice,minRating,page} = req.query;
    //convert a page to integer, and set a default of 1 or it is not passed
    let pageInt = parseInt(page);

    if(isNaN(page)){
        pageInt = 1;
    }

    if(!sort){
        sort = 'name';
    }

    if(!order){
        order = 'asc';
    }

    fetchProducts(sort,order,pageInt,minPrice,minRating)
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