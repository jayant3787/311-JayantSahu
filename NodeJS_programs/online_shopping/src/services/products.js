/**
 * Service talks to the database (data layer)
 */
import mongoose from "mongoose";
import config from "../utils/config.js";

const Product = mongoose.model("Product");

const fetchProducts = (sort, order, page, q, minPrice, minRating) => {
  const skipClause = (page - 1) * config.PAGE_SIZE;

  const filterClause = {};
  if (minPrice) {
    filterClause.price = {
      $gte: minPrice,
    };
  }

  if (minRating) {
    filterClause.rating = {
      $gte: minRating,
    };
  }

  if (q) {
    filterClause.description = {
      $regex: q,
      $options: "i",
    };
  }

  const sortClause = {
    [sort]: order === "desc" ? -1 : 1,
  };
  return Product.find(filterClause)
    .sort(sortClause)
    .skip(skipClause)
    .limit(config.PAGE_SIZE);
};

const fetchProductById = (_id) => {
  return Product.findById(_id);
};
export { fetchProducts, fetchProductById };
