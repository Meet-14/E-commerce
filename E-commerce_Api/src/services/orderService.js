const Address = require("../models/address.model.js");
const Order = require("../models/order.model.js");
const OrderItem = require("../models/orderItems.js");
const cartService = require("../services/cart.service.js")


async function createOrder(user, shippAddress) {
    let address;
    if (shippAddress._id) {
        let existAddress = await Address.findById(shippAddress._id);
        address = existAddress;
    } else {
        address = new Address(shippAddress);
        address.user = user._id;
        await address.save();

        user.address.push(address)
        await user.save()
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = []

    for (const item of cart.cartItems) {
        const orderItem = new OrderItem({
            price: item.price,
            product: item.product,
            quantity: item.quantity,
            size: item.size,
            userId: item.userId,
            discountedPrice: item.discountedPrice
        })

        const createOrderitem = await orderItem.save()
        orderItems.push(createOrderitem)
    }

    const createdOrder = new Order({
        user,
        orderItems,
        totalPrice: cart.totalPrice,
        totalDiscountdPrice: cart.totalDiscountedPrice,
        discount: cart.dicount,
        totalItem: cart.totaItem,
        shippingAddress: address
    })

    const savedOrder = await createdOrder.save()
    await cartService.clearUserCart(user._id);
    return savedOrder;
}


async function placeOrder(orderId) {
    const order = await findOrderById(orderId)

    order.orderStatus = "Placed";
    order.paymentDetails.paymentStatus = "Completed";

    return await order.save();
}

async function confirmedOrder(orderId) {
    const order = await findOrderById(orderId)

    order.orderStatus = "Confirmed";

    return await order.save();
}

async function shipOrder(orderId) {
    const order = await findOrderById(orderId)

    order.orderStatus = "Shipped";

    return await order.save();
}

async function deliverOrder(orderId) {
    const order = await findOrderById(orderId)

    order.orderStatus = "Delivered";

    return await order.save();
}


async function cancleOrder(orderId) {
    const order = await findOrderById(orderId)

    order.orderStatus = "Cancelled";

    return await order.save();
}

async function findOrderById(orderId) {

    const order = await Order.findById(orderId)
        .populate('user')
        .populate({ path: 'orderItems', populate: { path: 'product' } })
        .populate('shippingAddress')
    return order


}

async function usersOrderHistory(userId) {
    try {
        const orders = await Order.find({ user: userId})
            .populate({ path: 'orderItems', populate: { path: 'product' } }).lean()
        return orders
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getAllOrders() {
    return await Order.find()
        .populate({ path: 'orderItems', populate: { path: 'product' } }).lean()
}

async function deleteOrder(orderId) {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id)
}

module.exports = { 
    createOrder, 
    placeOrder,
    confirmedOrder, 
    cancleOrder, 
    shipOrder, 
    deleteOrder, 
    findOrderById, 
    usersOrderHistory, 
    getAllOrders, 
    deleteOrder,
    deliverOrder,
 }