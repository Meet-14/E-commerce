const express = require('express')
const Product = require('./models/product.model.js')

const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    return res.status(200).send({ massage: "wellCome", status: true })
})

app.get('/product', async (req, res) => {
    try {
        const productData = await Product.find();
        res.send(productData);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

const authRouters = require("./routes/auth.route.js")
app.use("/auth", authRouters)

const userRouters = require("./routes/user.route.js")
app.use("/api/users", userRouters)

const productRouter = require("./routes/product.routes.js")
app.use("/api/product", productRouter)

const adminProductRouter = require("./routes/adminProduct.routes.js")
app.use("/api/admin/product", adminProductRouter)

const cartRouter = require("./routes/cart.routes.js")
app.use("/api/cart", cartRouter)

const cartItemRouter = require("./routes/cartItem.routes.js")
app.use("/api/cart_items", cartItemRouter)

const orderRouter = require("./routes/order.routes.js")
app.use("/api/orders", orderRouter)

const adminOrderRouter = require("./routes/adminOrder.routers.js");
app.use("/api/admin/orders", adminOrderRouter)

module.exports = app;
