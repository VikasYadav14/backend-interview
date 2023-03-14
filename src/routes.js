const express = require('express')
const router = express.Router()


const { createOrder,getAllOrders, getOrderById,updateOrder,deleteOrder } = require('./controllers/orderController')
const { createService } = require('./controllers/serviceController')


// -------order api ----//
router.post('/order/create', createOrder)
router.get('/order/get/all', getAllOrders)
router.get('/order/get/:orderId', getOrderById)
router.put('/order/update/:orderId', updateOrder)
router.delete('/order/delete/:orderId', deleteOrder)

// -------service api --------//
router.post('/service/create', createService)
module.exports = router