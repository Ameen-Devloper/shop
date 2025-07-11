import mongoose, { mongo } from "mongoose";

const ProductSchema = new mongoose.Schema({
    productTitle: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    },
    Price: {
        type: String,
        required: true,
    },
    Rating: {
        type: String,
    },
    discont: {
        type: Number,
        default: 0
    }
})

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema)
export default Product