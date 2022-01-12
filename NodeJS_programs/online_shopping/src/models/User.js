import mongoose from "mongoose";
// schema for users
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: [ 'customer', 'admin' ],
    default: 'customer'
}
});
mongoose.model( 'User', userSchema );