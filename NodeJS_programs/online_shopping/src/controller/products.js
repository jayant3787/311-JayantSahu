import { fetchProducts } from "../services/products.cjs";
const getProducts = ( req, res ) => {
    res.json(fetchProducts());
};
export {
    getProducts
}