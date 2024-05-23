const Cart = require("../models/cart.model");
const CartItem = require("../models/cartItem.model");
const Product = require("../models/product.model");

async function createCart(user) {
    try {
        const cart = new Cart({ user });
        const createdCart = await cart.save()
        return createdCart
    } catch (error) {
        throw new Error(error.message)
    }

}

async function clearUserCart(userId) {
    try {
        const userCart = await Cart.findOne({ user:userId });
        const cartItems = await CartItem.find({ cart: userCart._id }).populate("product")
        if (userCart) {
            console.log("clearUserCart")
            userCart.cartItems = [];
            await userCart.save();
            for (const cartItem of cartItems) {
                await cartItem.deleteOne()
            }
            console.log(userCart)
        }
    } catch (error) {
        throw new Error("Error clearing user's cart: " + error.message);
    }
}

async function findUserCart(userId) {

    try {
        const cart = await Cart.findOne({ user:userId });

        let cartItems = await CartItem.find({ cart: cart._id }).populate("product")

        cart.cartItems = cartItems;

        let totalPrice = 0;
        let totalDiscountedPrice = 0
        let totaItem = 0

        for (let cartItem of cart.cartItems) {
            totalPrice += cartItem.price;
            totalDiscountedPrice += cartItem.discountedPrice;
            totaItem += cartItem.quantity;
        }

        cart.totalPrice = totalPrice
        cart.totaItem = totaItem
        cart.dicount = totalPrice - totalDiscountedPrice
        cart.totalDiscountedPrice = totalPrice - cart.dicount  

        return cart

    } catch (error) {
        throw new Error(error.message)
    }

}

async function addCartItem(userId, req) {
    try {
        const cart = await Cart.findOne({ user: userId });
        const product = await Product.findById(req.productId)

        const isPrenset = await CartItem.findOne({ cart: cart._id, product: product._id, userId })

        if (!isPrenset) {
            const cartItem = new CartItem({
                product: product._id,
                cart: cart._id,
                quantity: 1,
                userId,
                price: product.price,
                size: req.size,
                discountedPrice: product.discountedPrice
            })
            const createdCartItem = await cartItem.save();
            cart.cartItems.push(createdCartItem);
            await cart.save();
            return "Item add to Cart"
        }

    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = { createCart, findUserCart, addCartItem,clearUserCart }