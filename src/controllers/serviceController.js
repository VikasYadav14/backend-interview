const serviceModel = require("../models/serviceModel")


const createService = async (req, res) => {
    try {
        let { name } = req.body

        if (!req.body) return res.status(400).send({ error: 'Please provide mandatory fields' })
      
        const order = await serviceModel.create({name})

        return res.status(201).send({ message: "service added successfully", data: order })

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {createService}