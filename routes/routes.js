const express = require('express')
const router = express.Router()

const userControllers = require('../controllers/controllers')

router.get('/', userControllers.getAllUsers)
router.post('/', userControllers.addUser)
router.get('/:id', userControllers.getUserById)
router.put('/:id', userControllers.updateUser)
router.delete('/:id', userControllers.deleteUser)

module.exports = router