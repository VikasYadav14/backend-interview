const orderModel = require("../models/orderModel")


const createOrder = async (req, res) => {
    try {
        let { totalfee, services } = req.body

        if (!req.body) return res.status(400).send({ error: 'Please provide mandatory fields' })
        const data = { ...req.body }
        data.date = Date.now()
        const order = await orderModel.create(data)

        return res.status(201).send({ message: "order placed successfully", data: order })

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateOrder = async (req, res) => {
    try {
        let { totalfee, services } = req.body
        const { orderId } = req.params

        let orderData = await orderModel.findById(orderId)
        if (!orderData) return res.status(404).send({ error: "order doesn't exist" })

        const order = await orderModel.findByIdAndUpdate({ _id:orderId }, req.body, { new: true }).select({ createdAt: 0, updatedAt: 0, __v: 0 })

        return res.status(201).send({ message: "order placed successfully", data: order })

    } catch (error) {
        return res.status(500).send(error.message)
    }
}



const deleteOrder = async (req, res) => {
    try {
        let { orderId } = req.params

        const order = await orderModel.findById(orderId)
        if (!order) return res.status(404).send({ error: "order doesn't exist" })

        await orderModel.deleteOne({ _id: orderId })

        return res.status(200).send({ message: "order is removed successfully" })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const getOrderById = async (req, res) => {
    try {
        const { orderId } = req.params

        let orderData = await orderModel.findById(orderId).select({ createdAt: 0, updatedAt: 0, __v: 0 }).populate('services','name')
        if (!orderData) return res.status(404).send({ error: "order doesn't exist" })

        return res.status(200).send({ message: 'order detail', data: orderData })

    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({}).select({ createdAt: 0, updatedAt: 0, __v: 0 }).populate('services','name')

        return res.status(201).send({ message: "All orders", "Number of orders": orders.length, data: orders })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder }