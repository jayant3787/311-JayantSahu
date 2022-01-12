// const mongoose = require( 'mongoose' );
import mongoose from "mongoose";
import config from "../utils/config.js";

const User = mongoose.model("User");
const fetchUsers = (sort, order, filRole, page) => {
  const skipClause = (page - 1) * config.PAGE_SIZE;
  const filterClause = {};
//   const Role = filRole.toString();
  if (filRole) {
    filterClause.role = {
      filRole,
    };
  }
  const sortClause = {
    [sort]: order === "desc" ? -1 : 1,
  };
  return User.find(filterClause)
    .sort(sortClause)
    .skip(skipClause)
    .limit(config.PAGE_SIZE);
};

export { fetchUsers };
