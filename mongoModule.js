const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/ecommerce_db")
.then(() => {
    console.log("connected");
})
.catch((err) => console.log(err));


const OrderSchema = new mongoose.Schema({
    orderId: Number,
    shipDate: Date,
    orderDate: Date,
    orderStatus: String,
    quantity: Number,
    feedback: Number,
    paymentMode: String,
    productId: Number,
    customer_id: Number,
})

const Order = new mongoose.model("order", OrderSchema);

module.exports = Order;