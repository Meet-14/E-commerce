const CartItem = require("../models/cartItem.model");
const userService = require("../services/user.service.js");


async function updateCartItem(userId, cartItemId, cartItemData) {
    try {
        const item = await findCartItemById(cartItemId)

        if (!item) {
            throw new Error("cart Item not found ", cartItemId)
        }
        const user = await userService.findUserById(item.userId)
        if (!user) {
            throw new Error("user not found ", userId)
        }

        if (user._id.toString() === userId.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;
            const updateCartItem = await item.save()
            return updateCartItem
        }
        else {
            throw new Error("can't update this cart item")
        }

    } catch (error) {
        throw new Error(error.message)
    }
}

async function removeCartItem(userId, cartItem) {
    const cartItems = await findCartItemById(cartItem)
    const user = await userService.findUserById(userId)
    if (user._id.toString() === cartItems.userId.toString()) {
        return await CartItem.findByIdAndDelete(cartItems)
    }

    throw new Error("You cant remove item")
}   

async function findCartItemById(cartItemId) {
    try {
        const cartItem = await CartItem.findById(cartItemId).populate('product');
        if (cartItem) {
            return cartItem;
        } else {
            return null; // Or provide a more informative message
        }
    } catch (error) {
        console.error("Error finding cart item:", error);
        // Handle the error appropriately (e.g., log details, notify user)
    }
}

module.exports = { updateCartItem, removeCartItem, findCartItemById }