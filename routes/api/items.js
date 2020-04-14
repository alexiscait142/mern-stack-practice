const express = require('express')
const router = express.Router()

// Item Model
const Item = require('../../models/item')

// @route GET api/items
// @description Get All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items=>res.json(items))
})

// @route POST api/items
// @description Create Item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item=>res.json(item))
})

// @route DELETE api/items/:id
// @description Delete Item
// @access Public
router.delete('/:id', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item=>res.json(item))
})

module.exports = router