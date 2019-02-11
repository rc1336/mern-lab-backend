const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/', userController.index)

router.get('/new', userController.new)

router.post('/', userController.create)

// router.get('/success', userController.success)

router.get('/:id', userController.showOne)

router.put('/:id', userController.update)

router.delete('/:id', userController.delete)

// router.get('/:id/edit', userController.edit)



module.exports = router