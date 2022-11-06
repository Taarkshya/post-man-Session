const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const axios = require("axios");
const { response } = require("express");
const e = require("express");
const Order = require("./mongoModule");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


async function Data() {
    let data = await Order.find();
    console.log(data);
}

app.get("/order", (req, res) => {
    try {
        console.log(req.query)
        const demo1 = async () => {
            let order_arr = await Order.find(req.query).limit(5);
            res.send(order_arr)
        }
        demo1();
    }
    catch (err) {
        console.log(err)
    }
})

app.post("/getOrderBy", (req, res) => {
    console.log("post", req.body);
    const demo1 = async() =>{
        await Order.insertMany([req.body,]);
        res.send("done")
    }
    demo1()
})


app.listen(3001, () => {
    console.log("listening to 3001 server");
})