// import { fetchProducts } from "../services/products.cjs";
import { fetchProducts, fetchProductById } from "../services/products.js";
const getProducts = (req, res) => {
  let { sort, order, minPrice, minRating, page, q } = req.query;
  //convert a page to integer, and set a default of 1 or it is not passed
  let pageInt = parseInt(page);

  if (isNaN(page)) {
    pageInt = 1;
  }

  if (!sort) {
    sort = "name";
  }

  if (!order) {
    order = "asc";
  }

  fetchProducts(sort, order, pageInt, q, minPrice, minRating)
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.json(err.message);
    });
};

const getProductById = (req, res) => {
  const { _id } = req.params;
  fetchProductById(_id)
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.json(err.message);
    });
};

//POST /products
const postProduct = (req,res) =>{
  const { body } = req;
  console.log( body );
  res.json({
    message: 'Wait I will add...'
  });
};
export { getProducts, getProductById, postProduct };
